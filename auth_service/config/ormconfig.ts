import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../src/models/user";

const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.PGHOST,
	port: 5432,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME || "user",
	entities: [User],
	synchronize: true,
	//dropSchema: true,
	logging: false,
});

//AppDataSource.initialize();
//.then(() => {
//	console.log("Auth Service's DataSource Initialized");
//	//getUsers();
//	//AppDataSource.destroy();
//	//AppDataSource.initialize();
//})
//.catch((err) => {
//	return err;
//});

export default AppDataSource;
