// Dependencies
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

})

// Static signup method
userSchema.statics.signup = async function (email, username, password) {

    // Validation
    if (!email || !username || !password) {
        throw Error("All fields must be filled")
    }

    if(!validator.isEmail(email))
        throw Error("Not a valid e-mail")

    if (!validator.isLength(username, {min: 3, max: 20})) {
        throw Error("Username must be between 3 and 20 characters")
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough")
    }

    const emailExists = await this.findOne({ email })
    const usernameExists = await this.findOne({ username })

    if (emailExists) {
        throw Error("Email already in use")
    }
    if (usernameExists) {
        throw Error("Username already in use")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, username, password: hash})

    return user;
}

// Static login method
userSchema.statics.login = async function(email, username, password) {
    if (!email || !username || !password) {
        throw Error("All fields must be filled")
    }

    const user  = await this.findOne({ email, username })

    if(!user) {
        throw Error("Incorrect email or username")
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error("Incorrect password")
    }

    return user;

} 


export default mongoose.model("User", userSchema)
