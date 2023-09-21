import { Router, Request, Response } from "express";
import { Product } from "../models/product";
import { AppDataSource } from "../index";
import ProductController from "../controllers/product.controller";

//import product from "@adecomm/common";

const router = Router();

router.get("/api/products/:id", ProductController.apiGetProductById);

export { router as getProductRouter };
