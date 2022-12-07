import dotenv from "dotenv";

const config = dotenv.config().parsed;


const PORT = Number(config.PORT);



export {config, PORT};