import request from "supertest";
import { app } from "../app";
import AppDataSource from "../../config/ormconfig";

declare global {
	var signin: () => Promise<string[]>;
}

beforeEach(async () => {
	await AppDataSource.initialize();
});

afterEach(async () => {
	await AppDataSource.destroy();
});

global.signin = async () => {
	const email = "pwd5@gmail.com";
	const password = "pwd5";

	const response = await request(app)
		.post("/api/users/signup")
		.send({
			email,
			password,
		})
		.expect(201);

	const cookie = response.get("Set-Cookie");

	return cookie;
};
