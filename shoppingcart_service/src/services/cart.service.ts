import express, { Request, Response } from "express";
import { AppDataSource } from "../index";
import { ShoppingCart } from "../models/shoppingcart";

export class cartService {
	constructor() {}

	static async getAllCarts() {
		try {
			const cartRepository = AppDataSource.getRepository(ShoppingCart);
			const carts = await cartRepository.find();

			console.log("All ShoppingCarts ", carts);
			return carts;
		} catch (error) {
			console.log("Could not fetch carts");
		}
	}

	static async createCart(products: any, userId: string) {
		//TODO:: Check to see if cart already exist
		//TODO:: If cart exist say you already have a cart created
		try {
			const cart = new ShoppingCart();

			const sum = products.reduce((acc: any, obj: any) => {
				acc += parseInt(obj.price);
				return acc;
			}, 0);

			cart.userId = userId;
			cart.products = products;
			cart.totalFee = sum;
			cart.createdAt = Date.now();

			const cartRepositoy = AppDataSource.getRepository(ShoppingCart);
			await cartRepositoy.save(cart);
			return cart;
		} catch (error) {
			console.log(error);
		}
	}
	static async updateUserCart(userSessionId: string, additionalProducts: any) {
		try {
			const allCarts = await AppDataSource.getRepository(ShoppingCart);
			const findCart = await allCarts.find({
				where: {
					userId: userSessionId,
				},
			});
			const cart = findCart[0];
			console.log(cart);

			cart.products = [...additionalProducts];

			await AppDataSource.getRepository(ShoppingCart).merge(cart, additionalProducts);

			const sum: number = cart.products.reduce((acc: any, obj: any) => {
				acc += parseInt(obj.price);
				return acc;
			}, 0);

			cart!.totalFee = sum;

			const changedCart = await AppDataSource.getRepository(ShoppingCart).save(cart!);

			console.log("Updated Cart ", changedCart);
			return changedCart;
		} catch (error) {
			console.log("Could not fetch carts");
		}
	}
	static async getUserCart(userSessionId: string) {
		try {
			const cart = await AppDataSource.getRepository(ShoppingCart);
			const userCart = await cart.find({
				where: {
					userId: userSessionId,
				},
			});
			console.log(userCart);
			return userCart;
		} catch (error) {
			console.log("Could not fetch your cart");
		}
	}
}
