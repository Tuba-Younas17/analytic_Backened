import mongoose from "mongoose";
import { AssignedTemplate } from "../../../models/assignedTemplateSchema.js";

export const assignTemplateController = async (req, res) => {
	try {
		const { title,  roles, cycle } = req.body;

		// Check if templateId is a valid ObjectId
		// if (!templateId || !mongoose.Types.ObjectId.isValid(templateId)) {
		// 	return res.status(400).json({
		// 		success: false,
		// 		message: "Invalid or missing templateId",
		// 	});
		// }

		const assignment = await AssignedTemplate.create({
			title,
			// template: templateId,
			roles,
			cycle,
		});

		return res.json({
			success: true,
			message: "Template assigned",
			data: assignment,
		});
	} catch (error) {
		console.error("Error assigning template:", error);
		return res.status(500).json({ success: false, message: error.message });
	}
};
