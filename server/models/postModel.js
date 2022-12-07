import mongoose from "mongoose";

const Schema = mongoose.Schema

const postSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Number
    }
}, {timestamps: true})

export default mongoose.model("Post", postSchema)