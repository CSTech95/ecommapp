//import dotenv from "dotenv";
//dotenv.config();
import express, { Request, Response } from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookiesession from "cookie-session";
import { currentUserRouter } from "./routes/current-user";
import { signInRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { getAllUsersRouter } from "./routes/getAllUsers";
const app = express();

app.set("trust-proxy", true);
app.use(json());
app.use(
	cookiesession({
		signed: false,
		//secure: process.env.NODE_ENV != "test",
		//secure: true,
	})
);

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(getAllUsersRouter);

app.all("*", async (req: Request, res: Response) => {
	//throw new NotFoundError
	console.log("No route available");
	res.status(404).send("No Route Available");
});

//app.use(errorHandler)

export { app };
