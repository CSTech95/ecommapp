import { Order } from "./models/order";
import { app } from "./app";
import "reflect-metadata";
import { DataSource } from "typeorm";

import "dotenv/config";

//TODO Connect to PostgreSQL DB with TypeORM
export const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.PGHOST,
	port: 5432,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME || "order",
	entities: [Order],
	synchronize: true,
	logging: false,
});
const getOrders = async () => {
	const orderRepository = AppDataSource.getRepository(Order);
	const orders = await orderRepository.find();
	console.log(orders);
};

AppDataSource.initialize()
	.then(async () => {
		console.log("Order Service's DataSource is Initialized");
		//getOrders();
	})
	.catch((err) => console.log(err));
//async () => {
//	const queryRunner = await AppDataSource.createQueryRunner();
//	var result = await queryRunner.manager.query(`SELECT * FROM products`);
//	await console.log(result);
//};

const start = async () => {
	app.listen(3130, () => {
		console.log("Order_service listening on port 3130");
	});
};

start();
