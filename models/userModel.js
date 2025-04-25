// models/userModel.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },

	// One user can have multiple types
	userTypes: [
		{
			type: String,
			enum: ["dashboardViewer", "dataCollector", "administrator"],
		},
	],

	// User can belong to multiple groups
	userGroups: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "UserGroup",
		},
	],

	// Role permissions only apply if the user is an admin
	rolePermissions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "RolePermission",
		},
	],

	createdAt: {
		type: Date,
		default: Date.now,
	},
});

export const User = mongoose.model("User", userSchema);
