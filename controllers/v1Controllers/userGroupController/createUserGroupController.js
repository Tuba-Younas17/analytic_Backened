import { UserGroup } from "../../../models/userGroupModel.js";
import { User } from "../../../models/userModel.js";

export const createUserGroupController = async (req, res) => {
	try {
		const { name, groupRole, approvingOfficer, members, superGroup } =
			req.body;

		// Validate approving officer (only check if the officer exists)
		const officer = await User.findById(approvingOfficer);
		if (!officer) {
			return res
				.status(404)
				.json({ message: "Approving officer not found" });
		}

		// Directly use the member IDs without additional validation (no need to map user details)
		const newGroup = new UserGroup({
			name,
			groupRole,
			superGroup: superGroup || null, // Default to null if not provided
			approvingOfficer: {
				_id: officer._id,
				name: officer.name, // Only include name and email for officer
				email: officer.email,
			},
			members, // Directly use the member IDs
			// createdBy: req.user.id, // assuming req.user contains the logged-in user info
		});

		await newGroup.save();

		res.status(201).json({
			message: "User group created",
			group: newGroup,
		});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
