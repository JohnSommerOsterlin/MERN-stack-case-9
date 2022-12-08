import express from "express";
import { createPost, getPosts, getPost, deletePost, updatePost } from "../controllers/postController.js"


const router = express.Router ();

// GET all posts
router.get("/", getPosts)

// GET a single post
router.get("/:id", getPost)

// POST a new post
router.post("/", createPost)

// DELETE a post
router.delete("/:id", deletePost)

// UPDATE a post
router.patch("/:id", updatePost)


export default router;