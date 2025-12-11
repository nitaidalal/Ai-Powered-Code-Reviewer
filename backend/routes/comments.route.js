import Comment from "../models/comment.model.js";
import express from "express";

const commentRoutes = express.Router();

// POST - Create new comment
commentRoutes.post("/comments", async (req, res) => {
    const { comment } = req.body;
    
    try {
        if (!comment.name || !comment.message) {
            return res.status(400).json({ error: "Name and message are required" });
        }
        const newComment = new Comment({
            name: comment.name,
            message: comment.message
        });

        await newComment.save();
        res.status(201).json({ 
            success: true,
            message: "Comment submitted successfully",
            comment 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: "Failed to submit comment" 
        });
    }
});

// GET - Retrieve all comments
commentRoutes.get("/comments", async (req,res) => {
    try {
        const comments = await Comment.find().sort({createdAt:-1});
        res.status(200).json({
            success:true,
            comments
        });
        
    } catch (error) {
        res.status(500).json({
            success:false,
            error:"Failed to fetch comments"
        });
    }
})

export default commentRoutes;