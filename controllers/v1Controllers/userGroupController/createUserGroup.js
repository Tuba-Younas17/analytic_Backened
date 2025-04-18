import { UserGroup } from "../../../models/UserGroup.js";

export const createUserGroup = async (req, res) => {
	try {
		const { name, members } = req.body;
		const newGroup = new UserGroup({ name, members });
		await newGroup.save();
		res.status(201).json({
			success: true,
			message: "User group created",
			data: newGroup,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Failed to create user group",
			error,
		});
	}
};
