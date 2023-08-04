import { app } from "../../app";

const request = require("supertest");
app;

describe("Test the root path", () => {
	test("It should response the GET method", async () => {
		const response = await request(app).get("/");
		expect(response.statusCode).toBe(200);
	});
});
