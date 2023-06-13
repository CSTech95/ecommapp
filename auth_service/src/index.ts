import { app } from "./app";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./models/user";
require("dotenv").config();

//TODO Connect to PostgreSQL DB with TypeORM
export const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.DB_HOST,
	port: 5432,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: "user",
	entities: [User],
	synchronize: true,
	logging: false,
});

const getUsers = async () => {
	//TODO Swtich to Repository from manager
	const userRepository = AppDataSource.getRepository(User);
	const users = await userRepository.find();
	console.log(users);
};
AppDataSource.initialize()
	.then(() => {
		console.log("DataSource Initialized");
		getUsers();
	})
	.catch((err) => console.log(err));

//TODO Connect to PostgreSQL DB with TypeORM

const start = async () => {
	const PORT = 3101;
	app.listen(PORT, () => {
		console.log("listening on port " + PORT);
	});
};

start();
