import { app } from "./app";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./models/product";

//TODO Connect to PostgreSQL DB with TypeORM
export const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.DB_HOST,
	port: 5432,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	//database: "",
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

const start = async () => {
	app.listen(3000, () => {
		console.log("listening on port 3000");
	});
};

start();
