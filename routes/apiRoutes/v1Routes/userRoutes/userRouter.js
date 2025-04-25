import express from "express";
import { createUserController } from "../../../../controllers/v1Controllers/userController/createUserController.js";
import { getAllUserController } from "../../../../controllers/v1Controllers/userController/getAllUserController.js";
export const userRouter = express.Router();

userRouter.post(`/create`, createUserController)
userRouter.get(`/get-all-user`, getAllUserController);
