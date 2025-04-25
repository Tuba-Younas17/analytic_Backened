// models/rolePermissionModel.js
import mongoose from "mongoose";

const rolePermissionSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		enum: [
			"manageUsers",
			"approveData",
			"viewAuditLogs",
			"manageDashboards",
			// add more as needed
		],
	},

	label: {
		type: String, // For checkbox UI (e.g., "Manage Users")
		required: true,
	},
});

export const RolePermission = mongoose.model(
	"RolePermission",
	rolePermissionSchema
);
