import mongoose from "mongoose";
import { DataCollectionTemplate } from "../../../models/dataCollectionTemplateSchema.js";

export const addTemplateController = async (req, res) => {
	try {
		const { title, dataPoints } = req.body;

		// Validate that all items are valid MongoDB ObjectIds
		if (
			!Array.isArray(dataPoints) ||
			!dataPoints.every((id) => mongoose.Types.ObjectId.isValid(id))
		) {
			return res
				.status(400)
				.json({
					success: false,
					message: "Invalid DataPoint ID(s) provided.",
				});
		}

		// Convert strings to ObjectId instances
		const dataPointIds = dataPoints.map(
			(id) => new mongoose.Types.ObjectId(id)
		);

		const newTemplate = new DataCollectionTemplate({
			title,
			dataPoints: dataPointIds,
		});

		const savedTemplate = await newTemplate.save();

		res.status(201).json({
			success: true,
			message: "Template created successfully",
			data: savedTemplate,
		});
	} catch (error) {
		console.error("Error creating template:", error);
		res.status(500).json({ success: false, message: error.message });
	}
};
