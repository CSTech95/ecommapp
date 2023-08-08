import { AppDataSource } from "../index";
import { Router, Request, Response } from "express";

import { ShoppingCart } from "../models/shoppingcart";

const router = Router();
router.post("/api/cart", async (req: Request, res: Response) => {
	try {
		const { userId, products } = req.body;
		const cart = new ShoppingCart();
		cart.userId = userId;
		cart.products = products;
		cart.createdAt = Date.now();

		const productRepositoy = AppDataSource.getRepository(ShoppingCart);
		await productRepositoy.save(cart);
		res.status(201).send(cart);
	} catch (error) {
		console.log(error);
	}
});

export { router as createCartRouter };
