import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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
	products: string[] | undefined | string;
}
