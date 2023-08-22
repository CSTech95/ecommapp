import { AppDataSource } from "../index";
import { Router, Request, Response } from "express";

import { ShoppingCart } from "../models/shoppingcart";
import { currentUser } from "@adecomm/common";

const router = Router();
router.post("/api/cart", currentUser, async (req: Request, res: Response) => {
	try {
		const { products } = req.body;
		let userSessionId = "";
		if (!req.currentUser) {
			throw new Error("Must be logged in");
		} else {
			userSessionId = await req.currentUser.id!;
		}
		const cart = new ShoppingCart();

		const sum = products.reduce((acc: any, obj: any) => {
			acc += parseInt(obj.price);
			return acc;
		}, 0);

		cart.userId = userSessionId;
		cart.products = products;
		cart.totalFee = sum;
		cart.createdAt = Date.now();

		const cartRepositoy = AppDataSource.getRepository(ShoppingCart);
		await cartRepositoy.save(cart);
		res.status(201).send(cart);
	} catch (error) {
		console.log(error);
	}
});

export { router as createCartRouter };
