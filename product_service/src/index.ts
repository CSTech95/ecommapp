import { app } from "./app";
//import "reflect-metadata";
import { DataSource, QueryRunner } from "typeorm";
import { Product } from "./models/product";
//import {Product} from "@adecomm/common/";

//TODO Connect to PostgreSQL DB with TypeORM
export const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.PGHOST,
	port: 5432,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME || "product",
	entities: [Product],
	synchronize: true,
	logging: false,
});
//const getProducts = async () => {
////	//TODO Swtich to Repository from manager
//	const productRepository = AppDataSource.getRepository(Product);
//	const products = await productRepository.find();
//	console.log(products);
//};

AppDataSource.initialize()
	.then(() => {
		console.log("DataSource Initialized");
		//getProducts();
	})
	.catch((err) => console.log(err));
//async () => {
//	const queryRunner = await AppDataSource.createQueryRunner();
//	var result = await queryRunner.manager.query(`SELECT * FROM products`);
//	await console.log(result);
//};

const start = async () => {
	app.listen(3000, () => {
		console.log("listening on port 3000");
	});
};

start();
