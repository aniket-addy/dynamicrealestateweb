const mongoose = require("mongoose");

/*
|--------------------------------------------------------------------------
| MONGODB CONNECTION (Serverless & Standard Server Compatible)
|--------------------------------------------------------------------------
*/

let cachedPromise = null;

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  if (cachedPromise) {
    return cachedPromise;
  }

  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      throw new Error(
        "MONGO_URI is missing in environment variables"
      );
    }

    cachedPromise = mongoose.connect(mongoURI);

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

    if (!process.env.VERCEL && process.env.NODE_ENV !== "production") {
      process.exit(1);
    }

    throw error;
  }
};

module.exports = connectDB;