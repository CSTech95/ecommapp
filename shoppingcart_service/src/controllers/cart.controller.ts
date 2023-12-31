import { Product } from "./../types/Product.type";
import { NextFunction, Request, Response } from "express";
import CartService from "../services/cart.service";

export default class CartController {
	constructor() {}
	static async apiGetAllCarts(req: Request, res: Response, next: NextFunction) {
		try {
			const cart = await CartService.getAllCarts();
			if (!cart) {
				res.status(404).json("Cart Not Found");
			}
			res.json(cart);
		} catch (error) {
			res.send(error);
		}
	}

	static async apiCreateCart(req: Request, res: Response, next: NextFunction) {
		try {
			const products: Product[] = await req.body.products;
			let userSessionId = "";
			if (!req.currentUser) {
				throw new Error("Must be logged in");
			} else {
				userSessionId = await req.currentUser.id!;
			}
			const data = req.body;

			const createdCart = await CartService.createCart(products, userSessionId);
			res.json(createdCart);
		} catch (error) {
			res.send(error);
		}
	}
	static async apiUpdateUserCart(req: Request, res: Response, next: NextFunction) {
		try {
			if (!req.currentUser) {
				throw new Error("Must be logged in");
			}
			const userSessionId = await req.currentUser.id!;
			const products: Product[] = await req.body.products;
			//console.log(userSessionId);

			const updatedCart = await CartService.updateUserCart(userSessionId, products);
			res.json(updatedCart);
		} catch (error) {
			res.send(error);
		}
	}
	static async apiGetUserCart(req: Request, res: Response, next: NextFunction) {
		try {
			if (!req.currentUser) {
				throw new Error("Must be logged in");
			}
			const userSessionId = await req.currentUser.id!;
			const userCart = await CartService.getUserCart(userSessionId);
			res.json(userCart);
		} catch (error) {
			res.send(error);
		}
	}
}
