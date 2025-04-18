import express from "express";
import { datapointRouter } from "./datapointRoutes/datapointRouter.js";
import { templateRouter } from "./templateRoutes/templateRouter.js";
import { userGroupRouter } from "../userGroupRoutes/userGroupRouter.js";
export const v1Router = express.Router();

v1Router.use(`/datapoint`, datapointRouter)
v1Router.use(`/template`, templateRouter);
v1Router.use(`/users`, userGroupRouter);

