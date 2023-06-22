//import { User } from '../../../../../auth_service/src/models/user';
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// Relocate this to common library

@Entity()
export class Order {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ type: "varchar" })
	productId: number | undefined | string;

	@Column({ type: "varchar" })
	userId: number | undefined | string;

	@Column({ type: "varchar" })
	shoppingCartId: number | undefined | string;

	@Column({ type: "varchar" })
	createdAt: number | undefined | string;
}
