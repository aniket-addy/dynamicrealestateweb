const mongoose = require("mongoose");

let cachedPromise = null;

const connectDB = async () => {
  // Already connected
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  // Connection already in progress
  if (cachedPromise) {
    return cachedPromise;
  }

  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    throw new Error(
      "MONGO_URI is missing in Render Environment Variables"
    );
  }

  console.log("Connecting to MongoDB Atlas...");

  cachedPromise = mongoose.connect(mongoURI, {
    serverSelectionTimeoutMS: 30000,
    connectTimeoutMS: 30000,
    socketTimeoutMS: 45000,

    // Force IPv4 on Render
    family: 4,

    // MongoDB Atlas TLS
    tls: true,

    maxPoolSize: 10,
  });

  try {
    const connection = await cachedPromise;

    console.log(
      `MongoDB Connected: ${connection.connection.host}`
    );

    return connection;
  } catch (error) {
    cachedPromise = null;

    console.error(
      "MongoDB Connection Error:",
      error.message
    );

    throw error;
  }
};

module.exports = connectDB;