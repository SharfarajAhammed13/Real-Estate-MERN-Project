import express from "express";
import mongoose from "mongoose";
import dotenv, { config } from "dotenv";
import userRouter from "./routes/user.route";
import authRouter from "./routes/auth.route";

dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to mongoDB!');
})
.catch((err) => {
    console.log(err);
});
const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Server running in port 3000');
})

app.use('/api/user',userRouter);
app.use('api/auth',authRouter);