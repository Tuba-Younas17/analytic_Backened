import express from "express";
import { createDashboardController } from "../../../../controllers/v1Controllers/dashBoardController/createDashboardController.js";
export const dashBoardRouter = express.Router();
dashBoardRouter.post(`/create`, createDashboardController);
