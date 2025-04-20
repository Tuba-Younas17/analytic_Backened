import express from "express";
import { createChartController } from "../../../../controllers/v1Controllers/chartController/createChartController.js";
import { getAllChartsController } from "../../../../controllers/v1Controllers/chartController/getAllChartsController.js";

export const chartRouter = express.Router();
chartRouter.post("/create", createChartController);

chartRouter.get("/get-all-charts", getAllChartsController);
