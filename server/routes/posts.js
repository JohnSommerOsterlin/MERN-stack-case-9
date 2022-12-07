import express from "express";
import Post from "../models/postModel.js"

const router = express.Router ();

// GET all posts
router.get("/", (req, res) => {
    res.json({message: "GET all posts"})
})

// GET a single post
router.get("/:id", (req, res) => {
    res.json({message:"GET a single post"})
})

// POST a new post
router.post("/", async (req, res) => {
    const {description, likes} = req.body

    try {
        const post = await Post.create({description, likes})
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE a post
router.delete("/:id", (req, res) => {
    res.json({message: "DELETE a post"})
})

// UPDATE a post
router.patch("/:id", (req, res) => {
    res.json({message: "UPDATE a post"})
})


export default router;