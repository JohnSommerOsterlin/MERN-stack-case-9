import express from "express";
import { createPost, getPosts, getPost } from "../controllers/postController.js"


const router = express.Router ();

// GET all posts
router.get("/", getPosts)

// GET a single post
router.get("/:id", getPost)

// POST a new post
router.post("/", createPost)

// DELETE a post
router.delete("/:id", (req, res) => {
    res.json({message: "DELETE a post"})
})

// UPDATE a post
router.patch("/:id", (req, res) => {
    res.json({message: "UPDATE a post"})
})


export default router;