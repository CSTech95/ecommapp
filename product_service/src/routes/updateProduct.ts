import { Router } from "express";
import ProductController from "../controllers/product.controller";
const router = Router();

router.put("/api/product/:id", ProductController.apiUpdateProductById);

export { router as updateProductRouter };
