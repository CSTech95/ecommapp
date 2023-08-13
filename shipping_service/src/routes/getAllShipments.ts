import express, { Request, Response } from "express";
//import amqp from "amqplib";
//import { Shipping } from "../models/shipping";
//import { AppDataSource } from "../index";

const router = express.Router();
//const shipping = new Shipping();

router.get("/api/shipping", async (req: Request, res: Response) => {
	console.log("Received Shipments");

	//const shippingRepositoy = AppDataSource.getRepository(Shipping);
	//const shippment = await shippingRepositoy.find();
	//if (!shippment) {
	//	throw new Error("shippment not found");
	//}
	//console.log("Shippment \n", shippment);
	//res.send(shippment);
});

export { router as getAllShipmentsRouter };
