import { Chart } from "../../../models/chartModel.js";

export const createChartController = async (req, res) => {
	try {
		const { dataPointId, plotCombination, chartType, pivot } = req.body;

		const title = `${plotCombination.y} vs ${plotCombination.x}`;

		const newChart = new Chart({
			title,
			dataPoint: dataPointId,
			plotCombination,
			chartType,
			pivot: pivot || false,
		});

		await newChart.save();

		res.status(201).json({ message: "Chart created", chart: newChart });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
