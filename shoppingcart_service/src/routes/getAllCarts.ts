import { Router } from "express";
import CartController from "../controllers/cart.controller";

const router = Router();

router.get("/api/carts", CartController.apiGetAllCarts);

export { router as getAllCartsRouter };
