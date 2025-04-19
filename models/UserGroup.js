// models/userGroupModel.js
import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		enum: ["dataCollector", "administrator", "dashboardViewer"],
		required: true,
	},
});

const userGroupSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	members: {
		type: [memberSchema],
		required: true,
	},
});

export const UserGroup = mongoose.model("UserGroup", userGroupSchema);
