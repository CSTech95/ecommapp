//import { User } from '../../../../../auth_service/src/models/user';
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// Relocate this to common library

@Entity()
export class Order {
	@PrimaryGeneratedColumn("uuid")
	id: string | undefined;

	//@Column({ type: "varchar" })
	//productId: number | undefined | string;

	@Column("jsonb")
	//TODO Add interface for product value
	products: string[] | undefined | string;

	//@Column({ type: "varchar" })
	//userId: number | undefined | string;

	@Column({ type: "varchar" })
	totalFee: number | undefined | string;

	@Column({ type: "varchar" })
	createdAt: number | undefined | string;
}
