// Dependencies
import express from "express";

// Functions
import { createPost, getPosts, getPost, deletePost, updatePost } from "../controllers/postController.js"
import { requireAuth }  from "../middleware/requireAuth.js";


const router = express.Router ()

// GET all posts
router.get("/", getPosts)

// Require auth for all post routes
router.use(requireAuth)


// GET a single post
router.get("/:id", getPost)

// POST a new post
router.post("/", createPost)

// DELETE a post
router.delete("/:id", deletePost)

// UPDATE a post
router.patch("/:id", updatePost)


export default router;