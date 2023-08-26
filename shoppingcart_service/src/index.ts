import { app } from "./app";
import "reflect-metadata";
import "dotenv/config";
import { DataSource, QueryRunner } from "typeorm";
import { ShoppingCart } from "./models/shoppingcart";

//TODO Connect to PostgreSQL DB with TypeORM
export const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.PGHOST,
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
		console.log("Shopping Cart Service's DataSource Initialized");
		//AppDataSource.destroy();
	})
	.catch((err) => console.log(err));

const PORT = 3950;
const start = async () => {
	if (!process.env.JWT_SECRET) {
		throw new Error("JWT_SECRET must be defined");
	}

	app.listen(PORT, () => {
		console.log("ShoppingCart_service listening on port " + PORT);
	});
};

start();
