import { AppDataSource } from "./../index";
import { Router, Request, Response } from "express";
import { Product } from "../models/product";

const router = Router(); // Using Router() instead of express.router. It still works; TODO::investigate why
router.post("/api/products", async (req: Request, res: Response) => {
	const { title, price, rating } = req.body;
	const product = new Product();
	product.title = title;
	product.price = price;
	product.rating = rating;
	const productRepositoy = AppDataSource.getRepository(Product);
	await productRepositoy.save(product);
	res.status(201).send(product);
});

export { router as createProductRouter };
