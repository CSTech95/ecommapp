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
	database: process.env.DB_NAME || "shoppingcart",
	entities: [ShoppingCart],
	synchronize: true,
	logging: false,
});

AppDataSource.initialize()
	.then(() => {
		console.log("DataSource Initialized");
		//AppDataSource.destroy();
	})
	.catch((err) => console.log(err));

const PORT = 3950;
const start = async () => {
	app.listen(PORT, () => {
		console.log("ShoppingCart_service listening on port " + PORT);
	});
};

start();
