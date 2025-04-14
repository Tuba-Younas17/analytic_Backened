import mongoose from "mongoose";
const { Schema } = mongoose;

const dataPointSchema = new Schema({
	name: String, // Name of the data point
	type: String, // Data type: Text Field, Number, Date, Dropdown
	description: String,
	columns: String, // Number of columns (if multi-column enabled)
	isMultiColumn: {
		type: Boolean,
		default: false,
	},
});

export const DataPoint = mongoose.model("DataPoint", dataPointSchema);
