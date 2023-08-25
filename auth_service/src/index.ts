import "dotenv/config";
import { app } from "./app.ts";
import "reflect-metadata";
import { User } from "./models/user.ts";
import AppDataSource from "../config/ormconfig.ts";

AppDataSource.initialize();

const getUsers = async () => {
	const userRepository = AppDataSource.getRepository(User);
	const users = await userRepository.find();
	if (users) console.log(users);
};

const start = async () => {
	const PORT = 3101;
	if (app != undefined) {
		app.listen(PORT, () => {
			console.log("Auth_service listening on port " + PORT);
		});
	} else {
		console.log("Server is not yet ready");
	}
};

start();
