import { Chart } from "../../../models/chartModel.js";

export const createChartController = async (req, res) => {
	try {
		console.log(req.body);
		const { dataPointId, plotCombination, chartType, pivot, title } =
			req.body;
		console.log(title);

		// const title = chartTitle;

		const newChart = new Chart({
			title,
			dataPoint: dataPointId,
			plotCombination,
			chartType,
			pivot: pivot || false,
		});
		console.log(newChart);

		await newChart.save();

		res.status(201).json({ message: "Chart created", chart: newChart });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
