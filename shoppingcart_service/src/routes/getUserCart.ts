import { ShoppingCart } from "../models/shoppingcart";
import express, { Router, Request, Response } from "express";
import { AppDataSource } from "../index";
import { currentUser, requireAuth } from "@adecomm/common";

const router = express.Router();

router.get("/api/cart/user", currentUser, requireAuth, async (req: Request, res: Response) => {
	if (req.currentUser) {
		const userSessionId = await req.currentUser.id!;
		console.log(userSessionId);

		const cart = await AppDataSource.getRepository(ShoppingCart);
		const userCart = await cart.find({
			where: {
				userId: userSessionId,
			},
		});

		console.log(userCart);
		res.send(userCart);
	}

	//const results = await AppDataSource.getRepository(ShoppingCart).save(cart!);
	//return res.status(202).send(results);
	//console.log(req.currentUser || null);
});

export { router as getUserCartRouter };
