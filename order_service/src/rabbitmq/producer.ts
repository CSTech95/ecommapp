import amqp from "amqplib";
import { Channel } from "amqplib";
import { Order } from "../models/order";

import { config } from "./config";

//step 1 : Connect to the rabbitmq server
//step 2 : Create a new channel on that connection
//step 3 : Create the exchange
//step 4 : Publish the message to the exchange with a routing key

class Producer {
	channel!: Channel;

	async createChannel() {
		const connection = await amqp.connect(config.rabbitMQ.url);
		this.channel = await connection.createChannel();
	}

	async publishMessage(routingKey: string, message: Order) {
		if (!this.channel) {
			await this.createChannel();
		}

		const exchangeName = config.rabbitMQ.exchangeName;
		await this.channel.assertExchange(exchangeName, "direct");

		const logDetails = {
			logType: routingKey,
			message: message,
			dateTime: new Date(),
		};
		await this.channel.publish(exchangeName, routingKey, Buffer.from(JSON.stringify(logDetails)));

		console.log(`The new ${routingKey} log is sent to exchange ${exchangeName}`);
	}
}

export { Producer };
