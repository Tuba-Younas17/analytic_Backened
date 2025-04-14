import express from "express";
import { adddataPointController } from "../../../../controllers/v1Controllers/datapointController/adddatapointController.js";


export const datapointRouter = express.Router();

datapointRouter.post(`/add`, adddataPointController);
