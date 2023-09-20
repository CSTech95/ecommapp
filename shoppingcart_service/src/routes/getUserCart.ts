import { ShoppingCart } from "../models/shoppingcart";
import express, { Router, Request, Response } from "express";
import { AppDataSource } from "../index";
import { currentUser, requireAuth } from "@adecomm/common";
import Cart from "../controllers/cart.controller";

const router = express.Router();

router.get("/api/cart/user", currentUser, requireAuth, Cart.apiGetUserCart);

export { router as getUserCartRouter };
