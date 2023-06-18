//import { User } from '../../../../../auth_service/src/models/user';
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// Relocate this to common library

@Entity()
export class Order {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number | undefined | string;

	@Column({ type: "varchar" })
	productId: number | undefined | string;

	@Column({ type: "varchar" })
	userId: number | undefined | string;

	//@OneToOne((type) => User)
	//@JoinColumn()
	//userId: User;

	@Column({ type: "varchar" })
	shoppingCartId: number | undefined | string;

	@Column({ type: "varchar" })
	createdAt: number | undefined | string;
}
