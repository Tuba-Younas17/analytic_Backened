import mongoose from "mongoose";
const { Schema } = mongoose;

const dataPointSchema = new Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	description: { type: String, required: true },
	frequency: { type: String, required: true },
	userRoles: { type: [String], required: true },
	data: [
		{
			response: { type: Number }, // or Date/Number
			date: { type: Number }, // or Date/String based on your chart
			// Add more fields if needed
		},
	],
});

export const DataPoint = mongoose.model("DataPoint", dataPointSchema);
