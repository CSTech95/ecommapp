import request from "supertest";
import { app } from "../app";

declare global {
	var signin: () => Promise<string[]>;
}

//beforeAll(async () => {
//	//process.env.JWT_KEY = 'tinker'
//});

//beforeEach(async () => {});

//afterAll(async () => {});

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
