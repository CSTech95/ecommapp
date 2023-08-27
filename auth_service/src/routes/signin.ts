import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { validate } from "class-validator";
//import { validateRequest, BadRequestError } from "@adecomm/common";

import { Password } from "../services/password";
import { User } from "../models/user";
import AppDataSource from "../../config/ormconfig";

const router = express.Router();
//TODO :: Error Handling
router.post("/api/users/signin", async (req: Request, res: Response) => {
	const { email, password } = req.body;

	const existingUser = await AppDataSource.getRepository(User).findOneBy({
		email,
	});
	let enteredPassword = await password;

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
		//11
		// Generate JWT
		const userJwt = jwt.sign(
			{
				id: existingUser.id,
				email: existingUser.email,
				fName: existingUser.fName,
				lName: existingUser.lName,
				otherInfo: {
					address: existingUser.otherInfo.address,
					state: existingUser.otherInfo.state,
					zip: existingUser.otherInfo.zip,
				},
			},
			//process.env.JWT_KEY!
			process.env.JWT_SECRET!
		);

		req.session = {
			jwt: userJwt,
		};

		res.status(201).send(existingUser);
	} else {
		res.status(404).send("User does not exist");
	}

	//const passwordsMatch = await Password.compare(existingUser.password, password);

	//if (!passwordsMatch) {
	//	//throw new BadRequestError("Invalid Credentials");
	//}

	//return res.status(200).send(existingUser);
});

export { router as signInRouter };
