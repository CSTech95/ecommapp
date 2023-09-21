import express, { Router, Request, Response } from "express";
import { AppDataSource } from "../index";
import { Product } from "../models/product";
import ProductController from "../controllers/product.controller";
//Product;
const router = express.Router();

router.put("/api/product/:id", ProductController.apiUpdateProductById);

export { router as updateProductRouter };
