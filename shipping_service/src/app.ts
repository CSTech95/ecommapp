import express, { Request, Response } from "express";
//import "express-async-errors";
//Import JSON from body-parser
import { json } from "body-parser";
//Import cookieSession from cookie-session
import cookiesession from "cookie-session";
import { getAllShipmentsRouter } from "./routes/getAllShipments";
//import Routes

const app = express();

app.set("trust-proxy", true);
app.use(json());
app.use(
	cookiesession({
		signed: false,
		secure: process.env.NODE_ENV != "test",
	})
);

//TODO Add middleware for if a user is currently logged in
//app.use(currentUser)

//TODO input middleware param in method
app.use(getAllShipmentsRouter);
//app.use();
//app.use();
//app.use();
//app.use();

app.all("*", async (req: Request, res: Response) => {
	//throw new NotFoundError
	console.log("No route available");
	res.send("No Route Available");
});

//app.use(errorHandler)

export { app };
