import express, { Request, Response } from "express";
import { User } from "../models/user";
import AppDataSource from "../../config/ormconfig";

const router = express.Router();
const user = new User();

router.get("/api/users", async (req: Request, res: Response) => {
	const userRepositoy = AppDataSource.getRepository(User);
	const users = await userRepositoy.find();
	//if (!products) {
	//	throw new Error("product not found");
	//}
	//console.log("All user ", users);
	console.log("Sent all users");
	res.send(users);
});

export { router as getAllUsersRouter };
