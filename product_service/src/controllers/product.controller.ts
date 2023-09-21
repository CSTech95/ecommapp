import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../index";
import { Product } from "../models/product";
import productService from "../service/product.service";

export default class ProductController {
	constructor() {}
	static async apiGetAllProducts(req: Request, res: Response, next: NextFunction) {
		try {
			const returnedProducts = await productService.getAllProducts();
			if (!returnedProducts) {
				res.status(404).json("Can't get products");
			}
			res.json(returnedProducts);
		} catch (error) {
			res.send(error);
		}
	}
	static async apiGetProductById(req: Request, res: Response, next: NextFunction) {
		try {
			const productId: string = req.params.id;
			const returnedProduct = await productService.getProductById(productId);
			if (!returnedProduct) {
				res.status(404).json("Can't get products");
			}
			res.json(returnedProduct);
		} catch (error) {
			res.send(error);
		}
	}
	static async apiUpdateProductById(req: Request, res: Response, next: NextFunction) {
		try {
			const productId: string = req.params.id;
			const updatedProduct: Product = req.body;
			const returnedProduct = await productService.updateProductById(productId, updatedProduct);
			if (!returnedProduct) {
				res.status(404).json("Can't get products");
			}
			res.json(returnedProduct);
		} catch (error) {
			res.send(error);
		}
	}
	static async apiCreateProduct(req: Request, res: Response, next: NextFunction) {
		try {
			const { title, description, price, discountedPercentage, rating, stock, brand, category, thumbnail, images } = req.body;
			const createdProduct = await productService.createProduct(title, description, price, discountedPercentage, rating, stock, brand, category, thumbnail, images);
			if (!createdProduct) {
				res.status(404).json("Can't create product");
			}
			res.json(createdProduct);
		} catch (error) {
			res.send(error);
		}
	}
}
