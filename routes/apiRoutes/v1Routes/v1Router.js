import express from "express";
import { datapointRouter } from "./datapointRoutes/datapointRouter.js";
export const v1Router = express.Router();

v1Router.use(`/datapoint`,datapointRouter)
