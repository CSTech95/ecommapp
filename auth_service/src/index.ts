import "dotenv/config";
import { app } from "./app.ts";
//import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./models/user.ts";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.PGHOST,
	port: 5432,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: "user",
	entities: [User],
	synchronize: true,
	//dropSchema: true,
	logging: false,
});

const getUsers = async () => {
	const userRepository = AppDataSource.getRepository(User);
	const users = await userRepository.find();
	if (users) console.log(users);
};
AppDataSource.initialize()
	.then(() => {
		console.log("DataSource Initialized");
		//getUsers();
		//AppDataSource.destroy();
		//AppDataSource.initialize();
	})
	.catch((err) => {
		return err;
	});

const start = async () => {
	const PORT = 3101;
	if (app != undefined) {
		app.listen(PORT, () => {
			console.log("listening on port " + PORT);
		});
	} else {
		console.log("Server is not yet ready");
	}
};

start();
