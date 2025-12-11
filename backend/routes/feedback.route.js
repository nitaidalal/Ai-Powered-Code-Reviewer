import express from "express";
import Feedback from "../models/feedback.model.js";

const feedbackRoute = express.Router();

// POST - Create new feedback
feedbackRoute.post("/feedback", async (req, res) => {
    const { name,email, message } = req.body;
    
    try {
        if (!name || !email || !message) {
            return res.status(400).json({ error: "Name, email, and message are required" });
        }

        const feedback = new Feedback({
            name,
            email,
            message
        });

        await feedback.save();
        res.status(201).json({ 
            success: true,
            message: "Feedback submitted successfully",
            feedback 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: "Failed to submit feedback" 
        });
    }
});

export default feedbackRoute;



