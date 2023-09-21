import express, { Request, Response } from "express";
import { AppDataSource } from "../index";
import { ShoppingCart } from "../models/shoppingcart";
import CartController from "../controllers/cart.controller";

const router = express.Router();

router.get("/api/carts", CartController.apiGetAllCarts);

export { router as getAllCartsRouter };
