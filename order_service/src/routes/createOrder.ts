import { Order } from "../models/order";
import { AppDataSource } from "./../index";
import { Router, Request, Response } from "express";

interface Product {
	id?: string;
	title?: string;
	description?: string;
	price?: string;
	discountedPercentage?: string;
	rating?: string;
	stock?: string;
	brand?: string;
	category?: string;
	thumbnail?: string;
	images?: string;
}
interface ProductData {
	[key: string]: Product;
}

const router = Router();
router.post("/api/order", async (req: Request, res: Response) => {
	try {
		const { totalFee, products, userId } = req.body;
		const order = new Order();

		const sum = products.reduce((acc: any, obj: any) => {
			acc += parseInt(obj.price);
			return acc;
		}, 0);
		order.userId = userId;
		order.totalFee = sum;
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
