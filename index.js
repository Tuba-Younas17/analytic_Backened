import express from "express";
import connectToMongoDb from "./config/database.js";
import { apiRouter } from "./routes/apiRoutes/apiRouter.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
connectToMongoDb();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api", apiRouter);

app.get("/", (req, res) => {
	res.send("Hello, world!");
});

// Starting the server
const PORT =  3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
