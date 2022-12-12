// Dependencies
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema

const userSchema = new Schema({
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
userSchema.statics.signup = async function (username, password) {

    // Validation
    if (!username || !password) {
        throw Error("All fields must be filled")
    }
    if (!validator.isLength(username, {min: 3, max: 20})) {
        throw Error("Username must be between 3 and 20 characters")
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough")
    }

    const exists = await this.findOne({ username })

    if (exists) {
        throw Error("Username already in use")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({username, password: hash})

    return user
}


export default mongoose.model("User", userSchema)