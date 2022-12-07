// Dependencies
import express from "express"
import { config, PORT } from "./configs.js"




const app = express();

// Routes
app.get("/", (req, res) => {
    res.json({message: "Welcome to the app"})
})

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Server listening to port ${PORT}`)
})