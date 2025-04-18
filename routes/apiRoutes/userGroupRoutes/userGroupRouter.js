// routes/userGroupRoutes.js
import express from "express";
import { getAllUserGroups } from "../../../controllers/v1Controllers/userGroupController/getAllUserGroups.js";
import { createUserGroup } from "../../../controllers/v1Controllers/userGroupController/createUserGroup.js";


export const userGroupRouter = express.Router();

// GET /api/v1/user-group/get-all-user-groups
userGroupRouter.get("/get-all-user-groups", getAllUserGroups);

// POST /api/v1/user-group/create-user-group
userGroupRouter.post("/create-user-group", createUserGroup);

