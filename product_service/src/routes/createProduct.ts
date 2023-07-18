import { AppDataSource } from "./../index";
import { Router, Request, Response } from "express";
import { Product } from "../models/product";

const router = Router();
router.post("/api/products", async (req: Request, res: Response) => {
	try {
		const { title, description, price, discountedPercentage, rating, stock, brand, category, thumbnail, images } = req.body;
		const product = new Product();
		product.title = title;
		product.description = description;
		product.price = price;
		product.discountedPercentage = discountedPercentage;
		product.rating = rating;
		product.stock = stock;
		product.brand = brand;
		product.category = category;
		product.thumbnail = thumbnail;
		product.images = images;
		const productRepositoy = AppDataSource.getRepository(Product);
		await productRepositoy.save(product);
		res.status(201).send(product);
	} catch (error) {
		console.log(error);
	}
});

export { router as createProductRouter };
