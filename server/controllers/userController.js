// User Schema
import User from "../models/userModel.js"

// Login user 
const loginUser = async (req, res) => {
res.json({message: "Login user"})
}


// Signup user
const signupUser = async (req, res) => {
res.json({message: "Signup user"})
}

export { loginUser, signupUser }