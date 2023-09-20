import { NextFunction, Request, Response } from "express";
import { cartService } from "../services/cart.service";

export default class Cart {
	constructor() {}
	static async apiGetAllCarts(req: Request, res: Response, next: NextFunction) {
		try {
			const cart = await cartService.getAllCarts();
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
			const products = await req.body.products;
			let userSessionId = "";
			if (!req.currentUser) {
				throw new Error("Must be logged in");
			} else {
				userSessionId = await req.currentUser.id!;
			}
			const data = req.body;

			const createdCart = await cartService.createCart(products, userSessionId);
			res.json(createdCart);
		} catch (error) {
			res.send(error);
		}
	}
}
