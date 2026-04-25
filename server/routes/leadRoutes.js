const express = require('express');
const router = express.Router();
const {
  submitForm,
  getLeads,
  getLeadById,
  updateLead,
  deleteLead
} = require('../controllers/leadController');
const { validateForm } = require('../middleware/validationMiddleware');
const limiter = require('../middleware/rateLimiter');
const { protect, admin } = require('../middleware/authMiddleware');

// Public route - ONE route for ALL forms
router.post('/contact', limiter, validateForm, submitForm);

// Admin routes
router.get('/leads', protect, admin, getLeads);
router.get('/leads/:id', protect, admin, getLeadById);
router.put('/leads/:id', protect, admin, updateLead);
router.delete('/leads/:id', protect, admin, deleteLead);

module.exports = router;