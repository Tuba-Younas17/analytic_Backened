// models/userGroupModel.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const userGroupSchema = new Schema({
	name: {
		type: String,
		required: true,
	},

	// Role/type of this group
	groupRole: {
		type: String,
		enum: ["dashboardViewer", "dataCollector", "administrator"],
		required: true,
	},

	// Parent user group (optional)
	superGroup: {
		type: Schema.Types.ObjectId,
		ref: "UserGroup",
		default: null,
	},

	// Approving officer who oversees this group
	approvingOfficer: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},

	// Members of this group
	members: [{
		type: Schema.Types.ObjectId,
		ref: "User"
	}],

	createdAt: {
		type: Date,
		default: Date.now,
	},
});

export const UserGroup = mongoose.model("UserGroup", userGroupSchema);
