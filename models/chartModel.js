// models/chartModel.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const chartSchema = new Schema({
	title: { type: String, required: true },
	dataPoint: {
		type: Schema.Types.ObjectId,
		ref: "DataPoint",
		required: true,
	},
	plotCombination: {
		x: {
			type: String,
			required: true,
			set: (v) => v.toLowerCase(), // force lowercase
		},
		y: {
			type: String,
			required: true,
			set: (v) => v.toLowerCase(), // force lowercase
		},
	},
	chartType: { type: String, required: true },
	pivot: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now },
});

export const Chart = mongoose.model("Chart", chartSchema);
