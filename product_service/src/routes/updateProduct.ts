import express, { Router, Request, Response } from "express";
import { AppDataSource } from "../index";
import { Product } from "../models/product";
//Product;
const router = express.Router();

router.put("/api/product/:id", async (req: Request, res: Response) => {
	const product = await AppDataSource.getRepository(Product).findOneBy({ id: req.params.id });
	if (!product) {
		res.sendStatus(204);
	}
	AppDataSource.getRepository(Product).merge(product!, req.body);
	const results = await AppDataSource.getRepository(Product).save(product!);
	return res.status(202).send(results);
});

export { router as updateProductRouter };
