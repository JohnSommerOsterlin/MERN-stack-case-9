// Dependencies
import express from "express"
import { config } from "dotenv"




const app = express();

// Routes
app.get("/", (req, res) => {
    res.json({message: "Welcome to the app"})
})

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log("Listening on port 5000")
})