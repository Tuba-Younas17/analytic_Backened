import { User } from "../../../models/userModel.js";

export const createUserController = async (req, res) => {
	try {
        const { name, email, userTypes,
            // userGroups, rolePermissions
        } =
			req.body;

		// Check if email is already in use
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "Email is already in use" });
		}

		// Create a new user
		const newUser = new User({
			name,
			email,
			userTypes,
			// userGroups,
			// rolePermissions,
		});

		// Save the user to the database
		await newUser.save();

		return res
			.status(201)
			.json({ message: "User created successfully", user: newUser });
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({ message: "Error creating user", error: error.message });
	}
};
