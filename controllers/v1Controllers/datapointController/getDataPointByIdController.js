import { DataPoint } from "../../../models/dataPointModel.js";

// GET /api/v1/datapoint/get-by-id/:id
export const getDataPointByIdController = async (req, res) => {
	const { id } = req.params;
	try {
		const dataPoint = await DataPoint.findById(id);
		if (!dataPoint) return res.status(404).json({ message: "Not found" });
		res.json(dataPoint);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
