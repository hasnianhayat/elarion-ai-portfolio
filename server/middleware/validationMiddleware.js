const validateForm = (req, res, next) => {
  const { formType, email, name, message, firstName, lastName, workflowDescription, useCase } = req.body;

  console.log('Validating form data:', { formType, email, firstName, lastName });

  // Check form type
  if (!formType) {
    return res.status(400).json({
      success: false,
      error: 'Form type is required'
    });
  }

  if (!['general_contact', 'ai_consultation', 'newsletter', 'demo_request'].includes(formType)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid form type. Must be: general_contact, ai_consultation, newsletter, or demo_request'
    });
  }

  // Email is required for ALL forms
  if (!email) {
    return res.status(400).json({
      success: false,
      error: 'Email is required'
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address'
    });
  }

  // Form-specific validation
  if (formType === 'general_contact') {
    if (!name || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Name is required (minimum 2 characters)'
      });
    }
    if (!message || message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Message is required (minimum 10 characters)'
      });
    }
  }

  if (formType === 'ai_consultation') {
    if (!firstName || firstName.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'First name is required (minimum 2 characters)'
      });
    }
    if (!lastName || lastName.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Last name is required (minimum 2 characters)'
      });
    }
    
    // Check both possible field names for the workflow description
    const description = workflowDescription || useCase;
    if (!description || description.trim().length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Please describe your workflow (minimum 10 characters)'
      });
    }
  }

  // Clean and prepare data for next middleware
  req.body.email = email.trim().toLowerCase();
  
  if (name) req.body.name = name.trim();
  if (firstName) req.body.firstName = firstName.trim();
  if (lastName) req.body.lastName = lastName.trim();
  if (message) req.body.message = message.trim();
  
  // Ensure workflowDescription is set correctly
  if (formType === 'ai_consultation') {
    req.body.workflowDescription = (workflowDescription || useCase || '').trim();
  }

  next();
};

module.exports = { validateForm };