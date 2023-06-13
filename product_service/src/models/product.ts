import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number | undefined | string;

	@Column({ type: "varchar" })
	title: string | undefined;

	@Column({ type: "varchar" })
	price: string | undefined;

	@Column({ type: "varchar" })
	rating: string | undefined;
}
