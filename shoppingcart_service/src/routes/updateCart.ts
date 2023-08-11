import { ShoppingCart } from "../models/shoppingcart";
import express, { Router, Request, Response } from "express";
import { AppDataSource } from "../index";

//Product;
const router = express.Router();

router.put("/api/cart/:id", async (req: Request, res: Response) => {
	const cart = await AppDataSource.getRepository(ShoppingCart).findOneBy({ id: req.params.id });
	if (!cart) {
		res.sendStatus(204);
	}

	const products = req.body.products;

	const sum: number = products.reduce((acc: any, obj: any) => {
		acc += parseInt(obj.price);
		return acc;
	}, 0);

	AppDataSource.getRepository(ShoppingCart).merge(cart!, req.body);
	cart!.totalFee = sum;
	const results = await AppDataSource.getRepository(ShoppingCart).save(cart!);
	return res.status(202).send(results);
});

export { router as updateCartRouter };
