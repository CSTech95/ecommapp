import { Product } from "./Product.type";
export type CartType = {
	totalFee: number | undefined | string;
	products: Product[] | undefined | string;
	createdAt: number | undefined | string;
	userId: number | undefined | string;
	id: string | undefined;
};
