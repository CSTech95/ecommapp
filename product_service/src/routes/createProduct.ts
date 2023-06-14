import { AppDataSource } from "./../index";
import { Router, Request, Response } from "express";
import { Product } from "../models/product";

const router = Router(); // Using Router() instead of express.router. It still works; TODO::investigate why
router.post("/api/products", async (req: Request, res: Response) => {
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
});

export { router as createProductRouter };
