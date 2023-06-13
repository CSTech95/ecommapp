import { app } from "./app";

//TODO Connect to PostgreSQL DB with TypeORM

const start = async () => {
	app.listen(3000, () => {
		console.log("listening on port 3000");
	});
};

start();
