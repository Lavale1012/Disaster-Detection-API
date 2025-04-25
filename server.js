import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
connectDB(MONGO_URI);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
