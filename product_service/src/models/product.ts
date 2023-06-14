import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number | undefined | string;

	@Column({ type: "varchar" })
	title: string | undefined;

	@Column({ type: "varchar" })
	description: string | undefined;

	@Column({ type: "varchar" })
	price: string | undefined;

	@Column({ type: "varchar" })
	discountedPercentage: string | undefined;

	@Column({ type: "varchar" })
	rating: number | undefined;

	@Column({ type: "varchar" })
	stock: Boolean | undefined;

	@Column({ type: "varchar" })
	brand: string | undefined;

	@Column({ type: "varchar" })
	category: string | undefined;

	@Column({ type: "varchar" })
	thumbnail: string | undefined;

	@Column({ type: "varchar" })
	images: string | string[] | undefined;
}
