import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../types/Product.type";

@Entity({ name: "shopping_cart" })
export class ShoppingCart {
	@PrimaryGeneratedColumn({ type: "int" })
	@PrimaryGeneratedColumn("uuid")
	id: string | undefined;

	@Column({ type: "varchar" })
	userId: number | undefined | string;

	@Column({ type: "varchar" })
	createdAt: number | undefined | string;

	@Column("jsonb")
	//TODO Add interface for product value
	products: Product[] | undefined | string;

	@Column({ type: "varchar" })
	totalFee: number | undefined | string;
}
