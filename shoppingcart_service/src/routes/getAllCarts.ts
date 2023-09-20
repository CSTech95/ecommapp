import express, { Request, Response } from "express";
import { AppDataSource } from "../index";
import { ShoppingCart } from "../models/shoppingcart";
import Cart from "../controllers/cart.controller";

const router = express.Router();

router.get("/api/carts", Cart.apiGetAllCarts);

export { router as getAllCartsRouter };
