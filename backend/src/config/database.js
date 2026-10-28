import mongoose from "mongoose";
import config from "./config.js";

function ConnectToDatabase() {
    try {
        mongoose.connect(config.URI);
        console.log("Database Succesfully Connected");
    } catch (e) {
        console.log("Failed To Connect To Database");
    }
}

export default ConnectToDatabase;
