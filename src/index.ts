import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import tipsRoutes from "./routes/tips.routes";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://front-end-softii-test.vercel.app",
  })
);
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use("/tips", tipsRoutes);

export default app;
