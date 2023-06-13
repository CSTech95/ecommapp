import { Router, Request, Response } from "express";
import { Product } from "../models/product";
import { AppDataSource } from "../index";

const router = Router();

router.get("/api/products/:id", async (req: Request, res: Response) => {
	const product = await AppDataSource.getRepository(Product).findOneBy({ id: req.params.id });
	if (!product) {
		res.sendStatus(204);
	} else {
		res.send(product);
	}
});

export { router as getProductRouter };
