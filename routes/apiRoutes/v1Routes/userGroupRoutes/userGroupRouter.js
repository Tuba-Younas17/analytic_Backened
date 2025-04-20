// routes/userGroupRoutes.js
import express from "express";
import { getAllUserGroups } from "../../../../controllers/v1Controllers/userGroupController/getAllUserGroups.js";
import { createUserGroup } from "../../../../controllers/v1Controllers/userGroupController/createUserGroup.js";


export const userGroupRouter = express.Router();

userGroupRouter.post("/create-user-group", createUserGroup);
userGroupRouter.get("/get-all-user-groups", getAllUserGroups);


