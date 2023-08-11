import express, { Request, Response } from "express";
import { AppDataSource } from "../index";
import { ShoppingCart } from "../models/shoppingcart";

const router = express.Router();

router.get("/api/carts", async (req: Request, res: Response) => {
	const cartRepository = AppDataSource.getRepository(ShoppingCart);
	const carts = await cartRepository.find();
	//if (!products) {
	//	throw new Error("product not found");
	//}
	console.log("All ShoppingCarts ", carts);
	res.send(carts);
});

export { router as getAllCartsRouter };
