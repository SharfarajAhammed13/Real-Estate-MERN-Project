import express from "express";
import mongoose from "mongoose";
import dotenv, { config } from "dotenv";

dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to mongoDB!');
})
.catch((err) => {
    console.log(err);
});
const app = express();

app.listen(3000, () => {
    console.log('Server running in port 3000');
})