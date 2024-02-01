import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const authRouter = express.Router();

router.post("/signup", signup);

export default authRouter;