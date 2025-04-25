import express from "express";
import { createUserGroupController } from "../../../../controllers/v1Controllers/userGroupController/createUserGroupController.js";

export const userGroupRouter = express.Router();
userGroupRouter.post("/create", createUserGroupController);



