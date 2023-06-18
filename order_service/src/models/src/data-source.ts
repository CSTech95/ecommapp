import "reflect-metadata";
import { DataSource } from "typeorm";
import { Order } from "./entity/order";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "test",
	password: "test",
	database: "test",
	synchronize: true,
	logging: false,
	entities: [Order],
	migrations: [],
	subscribers: [],
});
