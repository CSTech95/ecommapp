import AppDataSource from "../../../config/ormconfig";
import { app } from "../../app";
import { User } from "../../models/user";
import request from "supertest";

beforeEach(async () => {
	await AppDataSource.initialize();
});

afterEach(async () => {
	await AppDataSource.destroy();
});

it("First name of first user should be pwd", async () => {
	const response = await request(app).get("/api/users/").expect(200);

	expect(response.body[0].fName).toEqual("pwd");
});
