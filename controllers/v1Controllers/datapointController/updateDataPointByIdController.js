import { DataPoint } from "../../../models/dataPointModel.js";


export const updateDataPointByIdController = async (req, res) => {
	try {
		// console.log("Incoming Request Data:", req.body);
		const { id } = req.params;
		const { title, quantity, price, description, discount } = req.body;
		// console.log(title, quantity, price, description, discount);

		const updatedDataPoint = await DataPoint.findByIdAndUpdate(
			id,
			req.body,
			{
				new: true,
			}
		);


		if (!updatedDataPoint) {
			return res.json({
				success: false,
				message: "Data point not found",
			});
		}

		return res.json({
			success: true,
			data: updatedDataPoint,
		});
	} catch (error) {
		console.log(error);
		return res.json({
			success: false,
			error: error.message,
		});
	}
};
