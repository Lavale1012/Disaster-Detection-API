import mongoose from "mongoose";

const dbName = "report-db"; // Replace with your actual database name
export const connectDB = async (MONGO_URI) => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    await mongoose.connect(MONGO_URI, {
      dbName: dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected, using collection:  ${dbName}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
