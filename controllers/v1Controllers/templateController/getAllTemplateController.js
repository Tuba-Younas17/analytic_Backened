import { DataCollectionTemplate } from "../../../models/dataCollectionTemplateSchema.js";

export const getAllTemplatesController = async (req, res) => {
	try {
		// Fetch templates and populate the dataPoints field
		const templates = await DataCollectionTemplate.find().populate({
			path: "dataPoints", // Path to the referenced field
			model: "DataPoint", // Explicitly define the referenced model
			select: "name type description frequency userRoles date", // Optional: Select only the fields you need
		});

		res.status(200).json({
			success: true,
			data: templates,
		});
	} catch (error) {
		console.error("Error fetching templates:", error);
		res.status(500).json({ success: false, message: error.message });
	}
};
