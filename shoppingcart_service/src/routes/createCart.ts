import { AppDataSource } from "../index";
import { Router, Request, Response } from "express";

import { ShoppingCart } from "../models/shoppingcart";

const router = Router();
router.post("/api/cart", async (req: Request, res: Response) => {
	try {
		const { userId, products } = req.body;
		const cart = new ShoppingCart();

		const sum = products.reduce((acc: any, obj: any) => {
			acc += parseInt(obj.price);
			return acc;
		}, 0);

		cart.userId = userId;
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
