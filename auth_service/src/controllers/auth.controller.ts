import { NextFunction, Request, Response } from "express";
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
}
