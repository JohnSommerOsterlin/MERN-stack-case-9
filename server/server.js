// Dependencies
import express from "express"
import mongoose from "mongoose";


import { config, MONGO_URI, PORT } from "./configs.js"
import postRoutes from "./routes/posts.js"


// Express app
const app = express();

// Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use("/api/posts", postRoutes)


// Connect to mongoDB
mongoose.set('strictQuery', true)
mongoose.connect(MONGO_URI)
.then(()=> {
    app.listen(PORT, () => {
        console.log(`Connected to DB & listening to port ${PORT}`)
    })
})
.catch((error)=> {
    console.log(error);
})

// Listen for requests
