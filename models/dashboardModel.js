// models/dashboardModel.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const dashboardSchema = new Schema({
	title: { type: String, required: true },
	description: String,
	charts: [{ type: Schema.Types.ObjectId, ref: "Chart" }],
	
	createdAt: { type: Date, default: Date.now },
});

export const Dashboard = mongoose.model("Dashboard", dashboardSchema);
