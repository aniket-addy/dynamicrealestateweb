require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const authorityProjectRoutes = require("./routes/authorityProjectRoutes");
const builderProjectRoutes = require("./routes/builderProjectRoutes");
const leadRoutes = require("./routes/leadRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

/* =====================================================
   CORS
===================================================== */

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests without Origin
      if (!origin) {
        return callback(null, true);
      }

      // Exact allowed origins
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Allow Vercel deployments
      if (origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      // Allow localhost during development
      if (
        process.env.NODE_ENV !== "production" &&
        origin.includes("localhost")
      ) {
        return callback(null, true);
      }

      console.log("Blocked by CORS:", origin);

      return callback(
        new Error("Origin not allowed by CORS")
      );
    },

    credentials: true,
  })
);

/* =====================================================
   MIDDLEWARE
===================================================== */

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

/* =====================================================
   HEALTH CHECK
===================================================== */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Real Estate API is running",
  });
});

/* =====================================================
   DATABASE MIDDLEWARE
===================================================== */

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error(
      "Database middleware error:",
      error.message
    );

    res.status(503).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

/* =====================================================
   API ROUTES
===================================================== */

app.use("/api/auth", authRoutes);

app.use(
  "/api/authority-projects",
  authorityProjectRoutes
);

app.use(
  "/api/builder-projects",
  builderProjectRoutes
);

app.use("/api/leads", leadRoutes);

app.use("/api/blogs", blogRoutes);

/* =====================================================
   404 HANDLER
===================================================== */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
    path: req.originalUrl,
  });
});

/* =====================================================
   GLOBAL ERROR HANDLER
===================================================== */

app.use((error, req, res, next) => {
  console.error("Global Error:", error);

  if (error.message === "Origin not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "CORS error: Origin not allowed",
    });
  }

  return res.status(500).json({
    success: false,
    message: error.message || "Internal Server Error",
  });
});

/* =====================================================
   START SERVER AFTER DATABASE CONNECTION
===================================================== */

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server running on port ${PORT}`
      );
    });
  })
  .catch((error) => {
    console.error(
      "MongoDB startup failed:",
      error.message
    );

    process.exit(1);
  });