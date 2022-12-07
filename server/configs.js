import dotenv from "dotenv";

const config = dotenv.config().parsed;


const PORT = Number(config.PORT);
const MONGO_URI = config.MONGO_URI;



export {config, PORT, MONGO_URI};