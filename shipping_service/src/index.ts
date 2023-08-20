import { app } from "./app";
import "reflect-metadata";
import amqplib, { Channel, Connection } from "amqplib";
import { DataSource, Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Shipment } from "./models/shipment";

//TODO Connect to PostgreSQL DB with TypeORM

// rabbitmq to be global variables
let channel: Channel, connection: Connection;

@Entity()
export class Order {
	@PrimaryGeneratedColumn("uuid")
	id: string | undefined;

	//@Column({ type: "varchar" })
	//productId: number | undefined | string;

	@Column("jsonb")
	//TODO Add interface for product value
	products: string[] | undefined | string;

	@Column({ type: "varchar" })
	userId: number | undefined | string;

	@Column({ type: "varchar" })
	totalFee: number | undefined | string;

	@Column({ type: "varchar" })
	createdAt: number | undefined | string;
}

export const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.PGHOST,
	port: 5432,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME || "shipment",
	entities: [Shipment],
	synchronize: true,
	logging: false,
});

AppDataSource.initialize()
	.then(async () => {
		console.log("Shipping Service's DataSource is Initialized");
	})
	.catch((err) => console.log(err));

async function connect() {
	try {
		const amqpServer = process.env.AMQP_URL! || "amqp://localhost:5672";
		const exchangeName = process.env.ORDER_EXCHANGE_NAME! || "orderExchange";
		const shippingKey = process.env.SHIPPING_MESSAGE_KEY || "order_key";
		connection = await amqplib.connect("amqp://localhost");
		channel = await connection.createChannel();
		const shippingQueueName = process.env.SHIPPING_QUEUE_NAME || "shipqueue";
		channel.assertExchange(exchangeName, "fanout", {
			durable: true,
		});
		channel.assertQueue(shippingQueueName, {
			exclusive: false,
		});

		channel.bindQueue(shippingQueueName, exchangeName, shippingKey);

		channel.consume(
			shippingQueueName,
			(msg: any) => {
				if (msg.content) {
					const data = JSON.parse(msg.content.toString());
					console.log(data);
					//const userID = data.message.userId;

					const shipment = new Shipment();
					//console.log("The Data " + data);

					//console.log("\n The Data userID " + msg.content.toString().message.userId + "\n");

					//shipment.userId = msg.content.message.userId.toString();
					shipment.userId = data.message.userId;
					shipment.orderId = data.message.id;
					shipment.shippingCompany = "FedEx";
					shipment.expectedDelivery = "March 8th";
					shipment.hops = "3 Hops";
					shipment.createdAt = Date.now();
					const shipmentRepositoy = AppDataSource.getRepository(Shipment);
					//const userID = msg.content.message.userID;
					shipmentRepositoy.save(shipment);
					//console.log(" [X] %s", msg.content.toString());
				}
			},
			{
				noAck: true,
			}
		);
	} catch (error) {
		console.log(error);
	}
}

connect();

const PORT = 3777;
const start = async () => {
	app.listen(PORT, () => {
		console.log("Shipping_service listening on port " + PORT);
	});
};

start();

//channel.bindQueue("orderQueue", exchangeName, "order_key");
//		//guest:guest@rabbitmq:5672
//		// consume all the orders that are not acknowledged
//		amqp: await channel.consume("orderQueue", (data) => {
//			console.log(`Received ${Buffer.from(data!.content)}`);
//			channel.ack(data!);
//		});
//	} catch (error) {
//		console.log(error);
