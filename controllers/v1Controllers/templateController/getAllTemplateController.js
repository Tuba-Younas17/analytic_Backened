import { DataCollectionTemplate } from "../../../models/dataCollectionTemplateSchema.js";

export const getAllTemplatesController = async (req, res) => {
	try {
		const templates = await DataCollectionTemplate.find().populate(
			"dataPoints"
		);

		return res.json({ success: true, data: templates });
	} catch (error) {
		return res.status(500).json({ success: false, message: error.message });
	}
};
