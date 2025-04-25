import { Dashboard } from "../../../models/dashboardModel.js";

export const createDashboardController = async (req, res) => {
	try {
		const { title, description, charts } = req.body;
		console.log(req.body)

		const newDashboard = await Dashboard.create({
			title,
			description,
			charts
		});

		res.status(201).json({
			success: true,
			message: "Dashboard created successfully",
			dashboard: newDashboard,
		});
	} catch (error) {
		console.error("Error creating dashboard:", error);
		res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
};
