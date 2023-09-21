import { Router } from "express";
import { currentUser } from "@adecomm/common";
import CartController from "../controllers/cart.controller";

const router = Router();

router.put("/api/cart/", currentUser, CartController.apiUpdateUserCart);

export { router as updateCartRouter };
