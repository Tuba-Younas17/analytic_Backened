// models/userGroupModel.js
import mongoose from "mongoose";

const userGroupSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	members: {
		type: [String], // Store roles like 'dataCollector'
		enum: ["dataCollector", "administrator", "dashboardViewer"],
		required: true,
	},
});

export const UserGroup = mongoose.model("UserGroup", userGroupSchema);
