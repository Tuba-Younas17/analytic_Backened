import express from "express";
import { adddataPointController } from "../../../../controllers/v1Controllers/datapointController/adddatapointController.js";
import { getDataPointController } from "../../../../controllers/v1Controllers/datapointController/getDataPointController.js";
import { deleteDataPointByIdController } from "../../../../controllers/v1Controllers/datapointController/deleteDataPointByIdController.js";
import { updateDataPointByIdController } from "../../../../controllers/v1Controllers/datapointController/updateDataPointByIdController.js";
import { getDataPointByIdController } from "../../../../controllers/v1Controllers/datapointController/getDataPointByIdController.js";


export const datapointRouter = express.Router();

datapointRouter.post(`/add-data-point`, adddataPointController);
datapointRouter.get(`/get-all-data-point`, getDataPointController);
datapointRouter.delete(`/delete-by-id/:id`, deleteDataPointByIdController);
datapointRouter.put(`/update-by-id/:id`, updateDataPointByIdController);
datapointRouter.get(`/get-by-id/:id`, getDataPointByIdController);





