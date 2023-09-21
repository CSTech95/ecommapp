import { AppDataSource } from "../index";
import { Router, Request, Response } from "express";

import { ShoppingCart } from "../models/shoppingcart";
import { currentUser } from "@adecomm/common";
import CartController from "../controllers/cart.controller";

const router = Router();
router.post("/api/cart", currentUser, CartController.apiCreateCart);

export { router as createCartRouter };
