import express from "express";
import { addTemplateController } from "../../../../controllers/v1Controllers/templateController/addTemplateController.js";
import { getAllTemplatesController } from "../../../../controllers/v1Controllers/templateController/getAllTemplateController.js";
import { assignTemplateController } from "../../../../controllers/v1Controllers/templateController/assignTemplateController.js";

export const templateRouter = express.Router();
templateRouter.post("/add-template", addTemplateController);
templateRouter.get("/get-all-template", getAllTemplatesController);

templateRouter.post("/assign-template", assignTemplateController);