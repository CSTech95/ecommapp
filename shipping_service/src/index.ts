import { app } from "./app";
import amqplib, { Channel, Connection } from "amqplib";

//TODO Connect to PostgreSQL DB with TypeORM

// rabbitmq to be global variables
let channel: Channel, connection: Connection;

connect();

async function connect() {
	try {
		const amqpServer = "amqp://localhost:5672";
		connection = await amqplib.connect(amqpServer);
		channel = await connection.createChannel();

		channel.bindQueue("orderQueue", "orderExchange", "order_key");

		// consume all the orders that are not acknowledged
		await channel.consume("orderQueue", (data) => {
			console.log(`Received ${Buffer.from(data!.content)}`);
			channel.ack(data!);
		});
	} catch (error) {
		console.log(error);
	}
}

const PORT = 3777;
const start = async () => {
	app.listen(PORT, () => {
		console.log("listening on port " + PORT);
	});
};

start();
