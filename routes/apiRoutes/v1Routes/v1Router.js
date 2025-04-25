import express from "express";
import { datapointRouter } from "./datapointRoutes/datapointRouter.js";
import { templateRouter } from "./templateRoutes/templateRouter.js";

import { chartRouter } from "./chartRoutes/chartRouter.js";
import { userGroupRouter } from "./userGroupRoutes/userGroupRouter.js";
import { dashBoardRouter } from "./dashBoardRoutes/dashBoardRouter.js";
import uploadsRouter from "./upload/uploadsRouter.js";
export const v1Router = express.Router();

v1Router.use(`/datapoint`, datapointRouter)
v1Router.use(`/template`, templateRouter);
v1Router.use(`/users`, userGroupRouter);
v1Router.use(`/chart`, chartRouter);
v1Router.use(`/dashBoard`, dashBoardRouter);
v1Router.use("/uploads", uploadsRouter);


