import express, { Request, Response } from "express";
//import "express-async-errors";
//Import JSON from body-parser
import { json } from "body-parser";
//Import cookieSession from cookie-session
import cookiesession from "cookie-session";
import { createCartRouter } from "./routes/createCart";
import { updateCartRouter } from "./routes/updateCart";
import { getAllCartsRouter } from "./routes/getAllCarts";
import { getUserCartRouter } from "./routes/getUserCart";
//import Routes

const app = express();

app.set("trust-proxy", true);
app.use(json());
app.use(
	cookiesession({
		signed: false,
		secure: false,
	})
);

//TODO input middleware param in method
app.use(createCartRouter);
app.use(updateCartRouter);
app.use(getAllCartsRouter);
app.use(getUserCartRouter);
//app.use();

app.all("*", async (req: Request, res: Response) => {
	//throw new NotFoundError
	console.log("No route available");
	res.send("No Route Available");
});

//app.use(errorHandler)

export { app };
