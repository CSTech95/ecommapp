require("dotenv").config();
import "reflect-metadata";
import express, { Request, Response } from "express";
//import "express-async-errors";
//Import JSON from body-parser
import { json } from "body-parser";
//Import cookieSession from cookie-session
import cookiesession from "cookie-session";
//import Routes
import { createProductRouter } from "./routes/createProduct";
import { deleteProductRouter } from "./routes/deleteProduct";
import { getAllProductsRouter } from "./routes/getAllProducts";
import { getProductRouter } from "./routes/getProduct";
import { updateProductRouter } from "./routes/updateProduct";

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

app.use(createProductRouter);
app.use(deleteProductRouter);
app.use(getAllProductsRouter);
app.use(getProductRouter);
app.use(updateProductRouter);

app.all("*", async (req: Request, res: Response) => {
	//throw new NotFoundError
	console.log("No route available");
	res.send("No Route Available");
});

//app.use(errorHandler)

export { app };
