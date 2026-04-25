const Lead = require('../models/Lead');
const { sendAutoReply, sendAdminNotification } = require('../utils/emailService');

// @desc    Submit all forms
// @route   POST /api/contact
// @access  Public
const submitForm = async (req, res) => {
  try {
    const { formType, ...formData } = req.body;

    console.log('Received form submission:');
    console.log('formType:', formType);
    console.log('formData:', formData);
    // Prepare lead data
    const leadData = {
      formType,
      pageSource: getPageSource(req.headers.referer),
      name: formData.name || `${formData.firstName || ''} ${formData.lastName || ''}`.trim(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      company: formData.company,
      service: formData.service,
      message: formData.message,
      workflowDescription: formData.workflowDescription || formData.useCase,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    };

    // Check for existing lead
    let lead = await Lead.findOne({ 
      email: formData.email.toLowerCase(),
      formType: formType 
    });

    if (lead) {
      // Update existing
      lead = await Lead.findByIdAndUpdate(
        lead._id,
        { ...leadData, updatedAt: Date.now() },
        { new: true, runValidators: true }
      );
    } else {
      // Create new
      lead = new Lead(leadData);
      await lead.save();
    }

    // Send emails in background (don't await)
    sendAutoReply(lead).catch(err => console.log('Email error:', err.message));
    if (formType !== 'newsletter') {
      sendAdminNotification(lead).catch(err => console.log('Email error:', err.message));
    }

    // Success message based on form type
    const messages = {
      general_contact: 'Message sent successfully! We\'ll get back to you within 24 hours.',
      ai_consultation: 'Consultation request received! Our AI team will contact you soon.',
      newsletter: 'Successfully subscribed to our newsletter!',
      demo_request: 'Demo request received! We\'ll contact you shortly.'
    };

    res.status(201).json({
      success: true,
      message: messages[formType] || 'Form submitted successfully!'
    });

  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit form. Please try again.'
    });
  }
};

// @desc    Get all leads (admin only)
// @route   GET /api/leads
// @access  Private/Admin
const getLeads = async (req, res) => {
  try {
    const { formType, status, page = 1, limit = 10 } = req.query;
    
    const query = {};
    if (formType) query.formType = formType;
    if (status) query.status = status;
    
    const leads = await Lead.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);
      
    const total = await Lead.countDocuments(query);
    
    res.json({
      success: true,
      data: leads,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Get single lead
// @route   GET /api/leads/:id
// @access  Private/Admin
const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({
        success: false,
        error: 'Lead not found'
      });
    }
    res.json({
      success: true,
      data: lead
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Update lead status
// @route   PUT /api/leads/:id
// @access  Private/Admin
const updateLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    
    if (!lead) {
      return res.status(404).json({
        success: false,
        error: 'Lead not found'
      });
    }
    
    res.json({
      success: true,
      data: lead
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Delete lead
// @route   DELETE /api/leads/:id
// @access  Private/Admin
const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) {
      return res.status(404).json({
        success: false,
        error: 'Lead not found'
      });
    }
    res.json({
      success: true,
      message: 'Lead deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Helper function
const getPageSource = (referer) => {
  if (!referer) return 'other';
  if (referer.includes('contact')) return 'contact_page';
  if (referer.includes('ai-agents')) return 'ai_agents_page';
  if (referer.includes('localhost')) return 'home_page';
  return 'other';
};

module.exports = {
  submitForm,
  getLeads,
  getLeadById,
  updateLead,
  deleteLead
};