import AppDataSource from "../../../config/ormconfig";
import { app } from "../../app";
import { User } from "../../models/user";
import request from "supertest";

it("should respond with users", async () => {
	await AppDataSource.initialize();
	const response = await request(app).get("/api/users/").expect(200);
	console.log(response.body);

	//expect(response.body).toEqual("");
});
