const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Load .env only in development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Import routes
const leadRoutes = require('./routes/leadRoutes');

const app = express();

/* ======================================================
   DATABASE CONNECTION
====================================================== */
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.warn("⚠️ MONGODB_URI is not defined - running without database");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
};

connectDB();

/* ======================================================
   MIDDLEWARE
====================================================== */

// Manual CORS middleware for maximum reliability on Vercel
app.use((req, res, next) => {
  const origin = req.headers.origin;
  const allowedOrigins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://elarion-ai-website.vercel.app",
    "https://client-blush-nu.vercel.app",
    "https://elarion-ai-website-architecture-75d.vercel.app",
    "https://www.elarionltd.com",
  ];
  
  if (allowedOrigins.includes(origin) || (origin && origin.endsWith(".vercel.app"))) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version");
  res.header("Access-Control-Allow-Credentials", "true");
  
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - Origin: ${req.headers.origin || 'no origin'}`);
  next();
});

/* ======================================================
   ROUTES
====================================================== */

// Health check route
app.get("/health", (req, res) => {
  const dbState = mongoose.connection.readyState;
  const dbStatus = dbState === 1 ? "connected" : "disconnected";
  
  res.status(200).json({
    status: "healthy",
    environment: process.env.NODE_ENV || 'development',
    database: dbStatus,
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API Routes - Mount them at /api
app.use("/api", leadRoutes);

// Add a test endpoint directly
app.get("/api/test", (req, res) => {
  res.json({ message: "API test endpoint working" });
});

// Add contact endpoint directly if not in leadRoutes
app.post("/api/contact", (req, res) => {
  console.log("Contact form submission received:", req.body);
  res.json({ 
    success: true, 
    message: "Contact form received",
    data: req.body 
  });
});

// Root route
app.get("/", (req, res) => {
  res.json({ 
    message: "Elarion AI Backend API",
    version: "1.0.0",
    status: "operational",
    environment: process.env.NODE_ENV || 'development',
    endpoints: {
      health: "/health",
      api: "/api",
      test: "/api/test",
      contact: "/api/contact"
    },
    timestamp: new Date().toISOString()
  });
});

// API listing endpoint
app.get("/api", (req, res) => {
  res.json({
    message: "Elarion AI API",
    endpoints: [
      "/api/contact",
      "/api/test",
      "/api/leads"
    ]
  });
});

/* ======================================================
   404 HANDLER
====================================================== */
app.use((req, res) => {
  console.log(`404 - Route not found: ${req.method} ${req.path}`);
  res.status(404).json({
    success: false,
    error: "Route not found",
    path: req.path,
    method: req.method,
    availableEndpoints: [
      "/",
      "/health",
      "/api",
      "/api/test",
      "/api/contact",
      "/api/leads"
    ]
  });
});

/* ======================================================
   ERROR HANDLING
====================================================== */
app.use((err, req, res, next) => {
  console.error(`❌ Error:`, err.message);
  res.status(err.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === "production" 
      ? "Internal Server Error" 
      : err.message,
    timestamp: new Date().toISOString()
  });
});

/* ======================================================
   VERCEL EXPORT - CRITICAL FOR SERVERLESS
====================================================== */
module.exports = app;

/* ======================================================
   LOCAL DEVELOPMENT SERVER - ONLY RUNS WHEN NOT ON VERCEL
====================================================== */
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Health check: http://localhost:${PORT}/health`);
    console.log(`📊 MongoDB: ${mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'}`);
    console.log(`🔓 CORS allowed origins:`);
    [
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      "https://elarion-ai-website.vercel.app"
    ].forEach(origin => console.log(`   - ${origin}`));
  });
}