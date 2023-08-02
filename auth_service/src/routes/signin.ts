import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../index";
import bcrypt from "bcrypt";
import { validate } from "class-validator";
//import { validateRequest, BadRequestError } from "@adecomm/common";

import { Password } from "../services/password";
import { User } from "../models/user";

const router = express.Router();

router.post("/api/users/signIn", async (req: Request, res: Response) => {
	const { email, password } = req.body;

	const existingUser = await AppDataSource.getRepository(User).findOneBy({
		email: req.body.email,
	});
	let enteredPassword = await req.body.password;

	async function isPassword(password: Buffer) {
		const match = await bcrypt.compare(enteredPassword, existingUser!.password!);

		if (match) {
			return true;
		} else {
			return false;
		}
	}
	let validatePassword = await isPassword(enteredPassword);
	if (existingUser && validatePassword) {
		//const isPasswordTrue = await bcrypt.compare(enteredPassword, existingUser.password!);
		//const isPasswordTrue = await bcrypt.compare(enteredPassword, existingUser.password!);
		//throw new BadRequestError("Invalid credentials");

		// Generate JWT
		//const userJwt = jwt.sign(
		//	{
		//		id: user.id,
		//		email: user.email,
		//		fName: user.fName,
		//		lName: user.lName,
		//	},
		//	//process.env.JWT_KEY!
		//	"tinker"
		//);

		//req.session = {
		//	jwt: userJwt,
		//};

		res.status(201).send(existingUser);
	} else {
		res.status(404).send("User does not exist");
	}

	//const passwordsMatch = await Password.compare(existingUser.password, password);

	//if (!passwordsMatch) {
	//	//throw new BadRequestError("Invalid Credentials");
	//}

	// Generate JWT
	//const userJwt = jwt.sign(
	//	{
	//		id: existingUser.id,
	//		email: existingUser.email,
	//	},
	//	process.env.JWT_KEY!
	//);

	// Store it on session object
	//req.session = {
	//	jwt: userJwt,
	//};

	//return res.status(200).send(existingUser);
});

export { router as signInRouter };
