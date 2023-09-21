import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AuthService from "../services/auth.service";
export default class AuthController {
	constructor() {}
	static async apiGetAllUsers(req: Request, res: Response, next: NextFunction) {
		try {
			const users = await AuthService.getAllUsers();
			if (!users) {
				res.status(400).json([]);
			}
			res.send(users);
		} catch (error) {
			res.send(error);
		}
	}
	static async apiGetCurrentUser(req: Request, res: Response, next: NextFunction) {
		try {
			console.log(req.currentUser);
			//console.log(req.currentUser!.id);

			res.send({ currentUser: req.currentUser || null });
		} catch (error) {
			res.send(error);
		}
	}
	static async apiSignUpUser(req: Request, res: Response, next: NextFunction) {
		try {
			const { fName, lName, email, password, otherInfo } = req.body;
			const hashedPassword = await bcrypt.hash(password, 10);
			const signUpUser = await AuthService.signUp(fName, lName, email, hashedPassword, otherInfo);
			if (signUpUser) {
				const userJwt = jwt.sign(
					{
						email,
						fName,
						lName,
						otherInfo: {
							address: otherInfo.address,
							state: otherInfo.state,
							zip: otherInfo.zip,
						},
					},
					//process.env.JWT_KEY!
					process.env.JWT_SECRET! || "tinker"
				);
				req.session = {
					jwt: userJwt,
				};
				res.json(signUpUser);
			}
		} catch (error) {
			res.send(error);
		}
	}
	static async apiSignInUser(req: Request, res: Response, next: NextFunction) {
		try {
			const { email, password } = req.body;
			const signInUser = await AuthService.signIn(email, password);
			if (signInUser) {
				const userJwt = jwt.sign(
					{
						email: signInUser.email,
						fName: signInUser.fName,
						lName: signInUser.lName,
						otherInfo: {
							address: signInUser.otherInfo.address,
							state: signInUser.otherInfo.state,
							zip: signInUser.otherInfo.zip,
						},
					},
					//process.env.JWT_KEY!
					process.env.JWT_SECRET! || "tinker"
				);
				req.session = {
					jwt: userJwt,
				};
				res.json(signInUser);
			} else {
				res.status(404).send("User Not Found");
			}
		} catch (error) {
			res.send(error);
		}
	}
}
