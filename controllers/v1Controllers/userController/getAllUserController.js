import { User } from "../../../models/userModel.js";

export const getAllUserController = async (req, res) => {
	try {
		// Fetch all users from the database
		const users = await User.find()
			// .populate("userGroups")
			// .populate("rolePermissions");

		return res.status(200).json({ users });
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({ message: "Error fetching users", error: error.message });
	}
};
