// Dependencies
import mongoose from "mongoose"

// Post Schema
import Post from "../models/postModel.js"

// Get all postes
const getPosts = async (req, res) => {
    const posts = await Post.find({}).sort({createdAt: -1})

    res.status(200).json(posts)
}

// Get a single post
const getPost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Post not found"})
    }

    const post = await Post.findById(id)

    if (!post) {
        return res.status(404).json({error: "Post not found"})
    }
    res.status(200).json(post)
}

// Create new post
const createPost = async (req, res) => {
    const {username, description, likes} = req.body

    // Add document to db
    try {
        const post = await Post.create({username, description, likes})
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete a post
const deletePost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Post not found"})
    }

    const post = await Post.findOneAndDelete({_id: id})

    if(!post) {
        return res.status(404).json({error: "Post not found"})
    }

    res.status(200).json(post)
}


// Update a post
const updatePost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Post not found"})
    }

    const post = await Post.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!post) {
        return res.status(404).json({error: "Post not found"})
    }

    res.status(200).json(post)
}

export { createPost, getPosts, getPost, deletePost, updatePost }