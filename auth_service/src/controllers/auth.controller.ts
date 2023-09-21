import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AuthService from "../services/auth.service";
export default class AuthController {
	constructor() {}
	static async apiGetCurrentUser(req: Request, res: Response, next: NextFunction) {
		try {
			console.log(req.currentUser);
			//console.log(req.currentUser!.id);

			res.send({ currentUser: req.currentUser || null });
		} catch (error) {
			res.send(error);
		}
	}
	static async apiSignUp(req: Request, res: Response, next: NextFunction) {
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
}
