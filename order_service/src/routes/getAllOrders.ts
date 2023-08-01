import { Order } from "./../models/order";
import express, { Request, Response } from "express";
import { AppDataSource } from "../index";

const router = express.Router();
const order = new Order();

router.get("/api/orders", async (req: Request, res: Response) => {
	const orderRepository = AppDataSource.getRepository(Order);
	const orders = await orderRepository.find();
	//if (!products) {
	//	throw new Error("product not found");
	//}
	console.log("All Orders ", orders);
	res.send(orders);
});

export { router as getAllOrdersRouter };
