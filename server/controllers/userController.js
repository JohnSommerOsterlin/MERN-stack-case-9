// Dependencies
import jwt from "jsonwebtoken"

// User Schema
import User from "../models/userModel.js"

// dotenv
import { SECRET } from "../configs.js"


// Create webtoken
const createToken = (_id) => {
    return jwt.sign({_id}, SECRET, {expiresIn: "3d" })
}

// Login user 
const loginUser = async (req, res) => {
    const {email, username, password} = req.body
    
    try {
        const user = await User.login(email, username, password)

        // Create a token
        const token = createToken(user._id)

        res.status(200).json({ id: user._id, email, username, token })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// Signup user
const signupUser = async (req, res) => {
    const {email, username, password} = req.body

    try {
        const user = await User.signup(email, username, password)

        // Create a token
        const token = createToken(user._id)

        res.status(200).json({email, username, token})
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export { loginUser, signupUser }