import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
//import { currentUser } from "@adecomm/common";

const router = express.Router();

router.get("/api/users/currentuser", (req: Request, res: Response) => {
	const secret = process.env.JWT_SECRET;
	if (!req.session?.jwt) {
		return res.send({ currentUser: null });
	}
	try {
		const payload = jwt.verify(req.session.jwt, secret!);
		res.send({ currentUser: payload });
	} catch (error) {
		res.send({ currentUser: null });
	}
});
export { router as currentUserRouter };
