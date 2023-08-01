import { Order } from "../models/order";
import { AppDataSource } from "./../index";
import { Router, Request, Response } from "express";

const router = Router();
router.post("/api/order", async (req: Request, res: Response) => {
	try {
		const { totalFee, products } = req.body;
		const order = new Order();
		//order.userId = userId;
		//order.products = products;
		order.totalFee = totalFee;
		order.products = products;
		order.createdAt = Date.now();
		const orderRepositoy = AppDataSource.getRepository(Order);
		await orderRepositoy.save(order);

		res.status(201).send(order);
	} catch (error) {
		console.log(error);
	}
});

export { router as createOrderRouter };
