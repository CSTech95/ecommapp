import { ShoppingCart } from "../models/shoppingcart";
import express, { Router, Request, Response } from "express";
import { AppDataSource } from "../index";
import { currentUser } from "@adecomm/common";

const router = express.Router();

router.put("/api/cart/", currentUser, async (req: Request, res: Response) => {
	if (!req.currentUser) {
		throw new Error("Must be logged in");
	}
	const userSessionId = await req.currentUser.id!;
	console.log(userSessionId);

	const allCarts = await AppDataSource.getRepository(ShoppingCart);
	const findCart = await allCarts.find({
		where: {
			userId: userSessionId,
		},
	});
	const cart = findCart[0];
	console.log(cart);

	const additionalProducts = req.body.products;
	cart.products = [...additionalProducts];

	await AppDataSource.getRepository(ShoppingCart).merge(cart, additionalProducts);

	const sum: number = cart.products.reduce((acc: any, obj: any) => {
		acc += parseInt(obj.price);
		return acc;
	}, 0);

	cart!.totalFee = sum;

	const results = await AppDataSource.getRepository(ShoppingCart).save(cart!);
	return res.status(202).send(results);
});

export { router as updateCartRouter };
