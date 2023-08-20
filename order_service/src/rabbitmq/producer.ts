import amqp, { Connection, Channel, ConsumeMessage } from "amqplib";
//import * as amqplib from "amqplib";

//import amqp = require('amqplib');

import { Order } from "../models/order";

import { config } from "./config";

//step 1 : Connect to the rabbitmq server
//step 2 : Create a new channel on that connection
//step 3 : Create the exchange
//step 4 : Publish the message to the exchange with a routing key

class Producer {
	channel!: Channel;
	//amqp_url = process.env.AMQP_URL! || config.rabbitMQ.url;
	async createChannel() {
		const connection: Connection = await amqp.connect("amqp://localhost");
		this.channel = await connection.createChannel();
	}

	async publishMessage(routingKey: string, message: any) {
		if (!this.channel) {
			await this.createChannel();
		}

		const exchangeName = process.env.ORDER_EXCHANGE_NAME! || config.rabbitMQ.exchangeName;
		await this.channel.assertExchange(exchangeName, "fanout");

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
