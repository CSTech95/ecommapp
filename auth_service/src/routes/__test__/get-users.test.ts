import AppDataSource from "../../../config/ormconfig";
import { app } from "../../app";
import { User } from "../../models/user";
import request from "supertest";

beforeAll(async () => {
	await AppDataSource.initialize();
});

afterEach(async () => {
	await AppDataSource.destroy();
});

it("Returns 200 on getUsers route", async () => {
	const response = await request(app).get("/api/users/").expect(200);
	console.log(response.body);

	//expect(response.body[0].fName).toEqual("pwd");
});

it("Returns correct summation of 1+1", async () => {
	expect(1 + 1).toEqual(2);
});
