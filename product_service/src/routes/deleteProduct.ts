import { Router, Request, Response } from "express";
import { AppDataSource } from "../index";
import { Product } from "../models/product";
const router = Router();

router.delete("/api/products/:id", async (req: Request, res: Response) => {
	const product = await AppDataSource.getRepository(Product).findOneBy({ id: req.params.id });
	if (!product) {
		res.sendStatus(204);
	} else {
		const results = await AppDataSource.getRepository(Product).delete(req.params.id);
		return res.status(202).send(results);
	}
});

export { router as deleteProductRouter };
