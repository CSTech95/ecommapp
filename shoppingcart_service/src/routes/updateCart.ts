import { ShoppingCart } from "../models/shoppingcart";
import express, { Router, Request, Response } from "express";
import { AppDataSource } from "../index";
import { currentUser } from "@adecomm/common";
import Cart from "../controllers/cart.controller";

const router = express.Router();

router.put("/api/cart/", currentUser, Cart.apiUpdateUserCart);

export { router as updateCartRouter };
