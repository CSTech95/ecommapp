import express, { Request, Response } from "express";
import { Product } from "../models/product";
import { AppDataSource } from "../index";

const router = express.Router();
const product = new Product();

router.get("/api/products", async (req: Request, res: Response) => {
	const productRepositoy = AppDataSource.getRepository(Product);
	const products = await productRepositoy.find();
	//if (!products) {
	//	throw new Error("product not found");
	//}
	console.log("All Products ", products);
	res.send(products);
});

export { router as getAllProductsRouter };
