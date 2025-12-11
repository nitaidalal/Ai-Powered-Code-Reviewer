import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import reviewRoutes from "./routes/review.route.js";
import feedbackRoutes from "./routes/feedback.route.js";
import commentRoutes from "./routes/comments.route.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

connectDB();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api", reviewRoutes);
app.use("/api", feedbackRoutes);
app.use("/api", commentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});