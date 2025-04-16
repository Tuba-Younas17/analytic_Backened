import mongoose from "mongoose";
const { Schema } = mongoose;

const dataPointSchema = new Schema({
	name: { type: String, required: true }, 
	type: { type: String, required: true }, 
	description: { type: String, required: true }, 
	frequency: { type: String, required: true }, 
	userRoles: { type: [String], required: true }, 
	date: { type: Date, required: true }, 
});

export const DataPoint = mongoose.model("DataPoint", dataPointSchema);
