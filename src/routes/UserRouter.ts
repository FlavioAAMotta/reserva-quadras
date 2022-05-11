import express from "express";
import { UserController } from "../controller/userController";

export const userRouter = express.Router();

const userController = new UserController();
userRouter.post('/signup', userController.signup)