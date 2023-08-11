import { app } from "./app";
//import "reflect-metadata";
import { DataSource, QueryRunner } from "typeorm";
import { ShoppingCart } from "./models/shoppingcart";

//TODO Connect to PostgreSQL DB with TypeORM
export const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.DB_HOST,
	port: 5432,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: "shoppingcart",
	entities: [ShoppingCart],
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
		//AppDataSource.destroy();
		//getProducts();
	})
	.catch((err) => console.log(err));
//async () => {
//	const queryRunner = await AppDataSource.createQueryRunner();
//	var result = await queryRunner.manager.query(`SELECT * FROM products`);
//	await console.log(result);
//};
const PORT = 3950;
const start = async () => {
	app.listen(PORT, () => {
		console.log("listening on port " + PORT);
	});
};

start();
