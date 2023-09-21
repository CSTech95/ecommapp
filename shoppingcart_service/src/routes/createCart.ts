import { Router } from "express";
import CartController from "../controllers/cart.controller";
import { currentUser } from "@adecomm/common";

const router = Router();
router.post("/api/cart", currentUser, CartController.apiCreateCart);

export { router as createCartRouter };
