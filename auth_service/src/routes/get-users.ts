import express, { Request, Response } from "express";
import { User } from "../models/user";
import { AppDataSource } from "../index";

const router = express.Router();
const user = new User();

router.get("/api/users", async (req: Request, res: Response) => {
	const userRepositoy = AppDataSource.getRepository(User);
	const users = await userRepositoy.find();
	//if (!products) {
	//	throw new Error("product not found");
	//}
	console.log("All user ", users);
	res.send(users);
});

export { router as getAllUsersRouter };
