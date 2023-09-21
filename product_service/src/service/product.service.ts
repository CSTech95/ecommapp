import { AppDataSource } from "../index";
import { Product } from "../models/product";
import { Categories } from "@adecomm/common";

//export type Categories =
//	| "smartphones"
//	| "laptops"
//	| "fragrances"
//	| "skincare"
//	| "groceries"
//	| "home-decoration"
//	| "furniture"
//	| "tops"
//	| "womens-dresses"
//	| "womens-shoes"
//	| "mens-shirts"
//	| "mens-shoes"
//	| "mens-watches"
//	| "womens-watches"
//	| "womens-bags"
//	| "womens-jewellery"
//	| "sunglasses"
//	| "automotive"
//	| "motorcycle"
//	| "lighting";

export default class productService {
	constructor() {}
	static async getAllProducts() {
		try {
			const productRepository = AppDataSource.getRepository(Product);
			const allProducts = await productRepository.find();

			console.log("All Products ", allProducts);
			return allProducts;
		} catch (error) {
			console.log("Could not fetch all Products");
		}
	}
	static async getProductById(productId: string) {
		try {
			const product = await AppDataSource.getRepository(Product).findOneBy({ id: productId });
			if (!product) {
				return "no product found";
			} else {
				return product;
			}
		} catch (error) {
			console.log("Could not fetch all Products");
		}
	}
	static async updateProductById(productId: string, updatedProduct: Product) {
		try {
			const product = await AppDataSource.getRepository(Product).findOneBy({ id: productId });
			if (!product) {
				return "can't update Product";
			}
			AppDataSource.getRepository(Product).merge(product!, updatedProduct);
			const changedProduct = await AppDataSource.getRepository(Product).save(product!);
			return changedProduct;
		} catch (error) {
			console.log("Could not fetch all Products");
		}
	}
	static async createProduct(
		title: string,
		description: string,
		price: string,
		discountedPercentage: string,
		rating: number,
		stock: boolean,
		brand: string,
		category: Categories,
		thumbnail: string,
		images: string | string[]
	) {
		try {
			const product = new Product();
			product.title = title;
			product.description = description;
			product.price = price;
			product.discountedPercentage = discountedPercentage;
			product.rating = rating;
			product.stock = stock;
			product.brand = brand;
			product.category = category;
			product.thumbnail = thumbnail;
			product.images = images;
			const productRepository = AppDataSource.getRepository(Product);
			await productRepository.save(product);
			return product;
		} catch (error) {
			console.log(error);
		}
	}
	static async deleteProductById(productId: string) {
		try {
			const product = await AppDataSource.getRepository(Product).findOneBy({ id: productId });
			if (!product) {
				return "Can't delete product";
			} else {
				const deletedProduct = await AppDataSource.getRepository(Product).delete(productId);
				return deletedProduct;
			}
		} catch (error) {
			console.log("Could not fetch all Products");
		}
	}
}
