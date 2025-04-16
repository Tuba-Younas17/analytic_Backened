import { DataPoint } from "../../../models/dataPointModel.js";


export const deleteDataPointByIdController = async (req, res) => {
	try {
		const dataPointId = req.params.id;

		// Find and delete the grocery item
		const deletedDataPoint = await DataPoint.findByIdAndDelete(dataPointId);

		if (!deletedDataPoint) {
			return res.status(404).json({ error: "DataPoint not found" });
		}

		res.json({ message: "Data point deleted successfully!" });
	} catch (error) {
		console.error("Error deleting item:", error);
		res.status(500).json({ error: "Failed to delete data point" });
	}
};
