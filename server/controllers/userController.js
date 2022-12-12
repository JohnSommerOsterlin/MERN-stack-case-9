// User Schema
import User from "../models/userModel.js"

// Login user 
const loginUser = async (req, res) => {
    res.json({message: "Login user"})
}


// Signup user
const signupUser = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.signup(username, password)

        res.status(200).json({username, user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export { loginUser, signupUser }