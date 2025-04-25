import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const uploadsRouter = express.Router();

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		const dir = "uploads/images";
		if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
		cb(null, dir);
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const upload = multer({ storage });

uploadsRouter.post("/image", upload.single("upload"), (req, res) => {
	const file = req.file;
	if (!file) {
		return res.status(400).json({ error: "No file uploaded" });
	}
	const fileUrl = `http://localhost:3000/${file.path.replace(/\\/g, "/")}`;
	res.status(200).json({ url: fileUrl });
});

export default uploadsRouter;
