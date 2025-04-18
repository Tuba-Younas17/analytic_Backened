import { DataCollectionTemplate } from "../../../models/dataCollectionTemplateSchema.js";

export const addTemplateController = async (req, res) => {
	try {
		const { title, dataPoints } = req.body;

		const newTemplate = new DataCollectionTemplate({
			title,
			dataPoints,
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
