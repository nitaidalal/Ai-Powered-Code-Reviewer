import express from "express";
import {generateAIContent} from "../config/gemini.js";

const router = express.Router();

router.post("/review", async (req, res) => {
    const { codeSnippet } = req.body;
    try{
        const aiResponse = await generateAIContent(codeSnippet);
        res.json({ review: aiResponse });
    } catch (error) {
        res.status(500).json({ error: "Failed to generate AI review" });
    }
});



export default router;