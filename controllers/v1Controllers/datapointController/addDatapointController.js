// controllers/datapointController/addDataPointController.js

import { DataPoint } from "../../../models/dataPointModel.js";

export const adddataPointController = async (req, res) => {
	try {
		const newDataPoint = new DataPoint(req.body);
		const savedDataPoint = await newDataPoint.save();
		res.status(201).json(savedDataPoint);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
