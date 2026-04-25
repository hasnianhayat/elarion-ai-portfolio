const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // 50 requests per IP
  message: {
    success: false,
    error: 'Too many requests. Please try again after 15 minutes.'
  }
});

module.exports = limiter;