import { AssignedTemplate } from "../../../models/assignedTemplateSchema.js";

export const assignTemplateController = async (req, res) => {
	try {
		const { templates, userGroup, cycle } = req.body;

		if (!templates || templates.length === 0 || !userGroup || !cycle) {
			return res.status(400).json({
				success: false,
				message:
					"At least one template, userGroup, and cycle are required",
			});
		}

		// Create an AssignedTemplate for each template selected
		const assignedTemplates = await Promise.all(
			templates.map(async (templateId) => {
				const assignedTemplate = new AssignedTemplate({
					title: "Assigned Template", // You can modify this based on your need
					template: templateId,
					userGroup: userGroup,
					roles: ["dataCollector", "administrator","dashboardViewer"], // You can modify this based on user roles
					cycle: cycle,
				});

				return await assignedTemplate.save();
			})
		);

		return res.status(201).json({
			success: true,
			message: "Templates assigned to user group successfully",
			data: assignedTemplates,
		});
	} catch (error) {
		console.error("Error assigning templates:", error);
		return res.status(500).json({ success: false, message: error.message });
	}
};
