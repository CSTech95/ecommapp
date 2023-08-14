export const config = {
	rabbitMQ: {
		url: process.env.AMQP_URL || "amqp://localhost",
		exchangeName: process.env.RABBITMQ_EXCHANGE_NAME || "orderExchange",
	},
};
