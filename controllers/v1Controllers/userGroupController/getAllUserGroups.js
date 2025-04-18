import { UserGroup } from "../../../models/UserGroup.js";


// GET all user groups
export const getAllUserGroups = async (req, res) => {
	try {
		const userGroups = await UserGroup.find().populate(
			"members",
			"name email"
		);
		res.status(200).json({ success: true, data: userGroups });
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Failed to fetch user groups",
			error,
		});
	}
};
