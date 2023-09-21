import { Router } from "express";
import ProductController from "../controllers/product.controller";

const router = Router();

router.get("/api/products", ProductController.apiGetAllProducts);

export { router as getAllProductsRouter };
