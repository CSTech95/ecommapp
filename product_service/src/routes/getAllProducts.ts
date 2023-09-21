import express, { Request, Response } from "express";
import { Product } from "../models/product";
import { AppDataSource } from "../index";
import ProductController from "../controllers/product.controller";

const router = express.Router();
const product = new Product();

router.get("/api/products", ProductController.apiGetAllProducts);

export { router as getAllProductsRouter };
