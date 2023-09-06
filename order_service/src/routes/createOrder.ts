import { Order } from "../models/order";
import { Producer } from "../rabbitmq/producer";
import { AppDataSource } from "./../index";
import { Router, Request, Response } from "express";
import { Product, sum, currentUser, requireAuth } from "@adecomm/common";

const producer = new Producer();

const router = Router();
router.post("/api/order", currentUser, requireAuth, async (req: Request, res: Response) => {
	const messageKey = process.env.ORDER_ROUTING_KEY || "order_key";
	try {
		const { products } = req.body;
		const order = new Order();

		order.userId = req.currentUser!.id;
		order.totalFee = sum(products);
		order.products = products as Product[];
		order.createdAt = new Date().toLocaleString();

		const orderRepositoy = await AppDataSource.getRepository(Order);
		await orderRepositoy.save(order);

		await producer.publishMessage(messageKey, order);
		res.status(201).send(order);
	} catch (error) {
		console.log(error);
	}
});

export { router as createOrderRouter };
