import { Router } from "express";
import { currentUser, requireAuth } from "@adecomm/common";
import CartController from "../controllers/cart.controller";

const router = Router();

router.get("/api/cart/user", currentUser, requireAuth, CartController.apiGetUserCart);

export { router as getUserCartRouter };
