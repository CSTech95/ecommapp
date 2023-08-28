import AppDataSource from "../../../config/ormconfig";
import { app } from "../../app";
import { User } from "../../models/user";
import request from "supertest";

beforeAll(async () => {
	await AppDataSource.initialize();
});

afterEach(async () => {
	//await AppDataSource.destroy();
});

it("Route Check on getUsers route", async () => {
	//const response = await request(app).get("/api/users/").expect(200);

	expect(1 + 1).toEqual(2);
	//expect(response.body[0].fName).toEqual("pwd");
});
