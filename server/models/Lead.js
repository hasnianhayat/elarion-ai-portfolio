const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  // Form Type Identification
  formType: {
    type: String,
    required: true,
    enum: [
      'general_contact',
      'ai_consultation',
      'newsletter',
      'demo_request'
    ]
  },
  
  // Source Tracking
  source: {
    type: String,
    default: 'website'
  },
  pageSource: {
    type: String,
    enum: ['contact_page', 'ai_agents_page', 'home_page', 'footer', 'other'],
    required: true
  },
  
  // Contact Information
  name: {
    type: String,
    required: function() {
      return ['general_contact', 'ai_consultation'].includes(this.formType);
    }
  },
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  company: String,
  
  // Form Specific Data
  service: String,
  workflowDescription: String,
  message: String,
  useCase: String,
  
  // Preferences
  interestedIn: [{
    type: String,
    enum: ['ai_agents', 'web_dev', 'data_science', 'consulting']
  }],
  
  // Lead Status
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'converted', 'unsubscribed'],
    default: 'new'
  },
  
  // Metadata
  ipAddress: String,
  userAgent: String,
  subscribedAt: {
    type: Date,
    default: function() {
      return this.formType === 'newsletter' ? new Date() : null;
    }
  },
  
  // Communications History
  communications: [{
    type: {
      type: String,
      enum: ['email', 'call', 'demo']
    },
    date: Date,
    notes: String,
    conductedBy: String
  }],
  
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date
});

// Indexes for performance
leadSchema.index({ email: 1, formType: 1 });
leadSchema.index({ status: 1, createdAt: -1 });
leadSchema.index({ pageSource: 1, createdAt: -1 });

module.exports = mongoose.model('Lead', leadSchema);