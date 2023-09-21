import { Router } from "express";
import AuthController from "../controllers/auth.controller";

const router = Router();

router.get("/api/users", AuthController.apiGetAllUsers);

export { router as getAllUsersRouter };

//async (req: Request, res: Response) => {
//	const userRepositoy = AppDataSource.getRepository(User);
//	const users = await userRepositoy.find();

//	console.log("Sent all users");
//	res.send(users);
//};
