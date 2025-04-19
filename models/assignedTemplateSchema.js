import mongoose from "mongoose";

const assignedTemplateSchema = new mongoose.Schema({
	title: { type: String, required: true },

	template: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "DataCollectionTemplate",
		required: true,
	},

	userGroup: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "UserGroup",
		required: true,
	},

	roles: [
		{
			type: String,
			enum: ["dataCollector", "administrator", "dashboardViewer"],
			required: true,
		},
	],

	cycle: {
		type: String,
		enum: [
			"Hourly",
			"Daily",
			"Weekly",
			"Monthly",
			"Quarterly",
			"Bi-Annually",
			"Yearly",
		],
		required: true,
	},

	assignedAt: { type: Date, default: Date.now },
});

export const AssignedTemplate = mongoose.model(
	"AssignedTemplate",
	assignedTemplateSchema
);
