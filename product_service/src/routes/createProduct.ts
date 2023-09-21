import { Router } from "express";
import ProductController from "../controllers/product.controller";

const router = Router();
router.post("/api/product", ProductController.apiCreateProduct);

export { router as createProductRouter };
