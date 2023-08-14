import { app } from "./app";
import "reflect-metadata";
import amqplib, { Channel, Connection } from "amqplib";

//TODO Connect to PostgreSQL DB with TypeORM

// rabbitmq to be global variables
let channel: Channel, connection: Connection;

async function connect() {
	try {
		const amqpServer = process.env.AMQP_URL! || "amqp://localhost:5672";
		connection = await amqplib.connect(amqpServer);
		channel = await connection.createChannel();
		const exchangeName = process.env.RABBITMQ_EXCHANGE_NAME! || "orderExchange";
		channel.bindQueue("orderQueue", exchangeName, "order_key");
		//guest:guest@rabbitmq:5672
		// consume all the orders that are not acknowledged
		amqp: await channel.consume("orderQueue", (data) => {
			console.log(`Received ${Buffer.from(data!.content)}`);
			channel.ack(data!);
		});
	} catch (error) {
		console.log(error);
	}
}

connect();

const PORT = 3777;
const start = async () => {
	app.listen(PORT, () => {
		console.log("listening on port " + PORT);
	});
};

start();
