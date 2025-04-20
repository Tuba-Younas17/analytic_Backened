import { Chart } from "../../../models/chartModel.js";


export const getAllChartsController = async (req, res) => {
	try {
		const charts = await Chart.find().populate("dataPoint");
		res.status(200).json(charts);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
