import { Router } from "express";
import ProductController from "../controllers/product.controller";
const router = Router();

router.delete("/api/products/:id", ProductController.apiDeleteProductById);

export { router as deleteProductRouter };
