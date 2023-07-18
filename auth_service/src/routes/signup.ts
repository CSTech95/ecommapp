import express, { Request, Response } from "express";
//import { body } from "express-validator";
import { validate } from "class-validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { AppDataSource } from "../../src/index";

//import { validateRequest, BadRequestError } from "@adecomm/common";

import { User } from "../models/user";

const router = express.Router();

router.post(
	"/api/users/signup",
	//validateRequest,
	async (req: Request, res: Response) => {
		const { fName, lName, email, password, address, state, zip, createdAt } = req.body;
		const existingUser = await AppDataSource.getRepository(User).findOneBy({ email: req.body.email });

		if (existingUser) {
			//throw new BadRequestError("Email in use");
			return res.send("User Exists"); // Fix this
		}

		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		const user = new User();

		user.fName = fName;
		user.lName = lName;
		user.email = email;
		user.password = hashedPassword;
		user.otherInfo = {
			address,
			state,
			zip,
			createdAt: Date.now(),
		};

		const errors = await validate(user);
		if (errors.length > 0) {
			throw new Error(`Validation failed!`);
		} else {
			const userRepository = AppDataSource.getRepository(User);
			await userRepository.save(user);
			res.status(201).send(user);
		}

		// Generate JWT
		//const userJwt = jwt.sign(
		//	{
		//		id: user.id,
		//		email: user.email,
		//	},
		//	process.env.JWT_KEY!
		//);

		//// Store it on session object
		//req.session = {
		//	jwt: userJwt,
		//};

		//res.status(201).send(user);
	}
);

export { router as signupRouter };
