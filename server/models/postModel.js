import mongoose from "mongoose";

const Schema = mongoose.Schema

const postSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
    },
    isPrivate: {
        type: Boolean,
        default: false
    },
    postedBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
    
}, {timestamps: true})

export default mongoose.model("Post", postSchema)