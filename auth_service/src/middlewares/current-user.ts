import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
	id: string;
	fName: string;
	lName: string;
	email: string;
	otherInfo: {
		address: string;
		state: string;
		zip: string;
		createdAt: string;
	};
}

declare global {
	namespace Express {
		interface Request {
			currentUser?: UserPayload;
		}
	}
}

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
	if (!req.session?.jwt) {
		return next();
	}
	try {
		const payload = jwt.verify(req.session.jwt, "tinker") as UserPayload;
		req.currentUser = payload;
	} catch (error) {
		res.send({ currentUser: null });
	}
	next();
};
