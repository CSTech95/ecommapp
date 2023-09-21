import { Router } from "express";
import { AppDataSource } from "../index";
import { Product } from "../models/product";
import ProductController from "../controllers/product.controller";
const router = Router();

router.delete("/api/products/:id", ProductController.apiDeleteProductById);

export { router as deleteProductRouter };
