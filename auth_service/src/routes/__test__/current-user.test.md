import { app } from "../../app";
import request from "supertest";

//TODO :: Fix the below test case
//describe("Test Current User returned creds", () => {
//	test("It should respond with user details", async () => {
//		const cookie = await global.signin();
//		const response = await request(app).get("/api/users/currentuser").set("Cookie", cookie).send().expect(200);
//		//expect(response.body.currentUser.email).toEqual("pwd5@gmail.com");
//	});
//});

//describe("Test Current User returned creds", () => {
//	test("It should respond with user details", async () => {
//		const response = await request(app).get("/api/users/currentuser").expect(200);
//		//expect(response.body.currentUser.email).toEqual("pwd5@gmail.com");
//	});
//});

//it("responds with details about the current user", async () => {
//	const cookie = await global.signin();

//	const response = await request(app)
//		.get("/api/users/currentuser")
//		.set("Cookie", cookie)
//		.send()
//		.expect(200);

//	expect(response.body.currentUser.email).toEqual("pwd5@test.com");
//});

//it("responds with null if not authenticated", async () => {
//	const response = await request(app).get("/api/users/currentuser").send().expect(200);

//	expect(response.body.currentUser).toEqual(null);
//});
