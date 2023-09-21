import { AppDataSource } from "./../index";
import { Router, Request, Response } from "express";
import { Product } from "../models/product";
import ProductController from "../controllers/product.controller";

const router = Router();
router.post("/api/product", ProductController.apiCreateProduct);

export { router as createProductRouter };
