import { Router } from "express";
import ProductController from "../controllers/product.controller";

const router = Router();
router.get("/api/products/:id", ProductController.apiGetProductById);

export { router as getProductRouter };
