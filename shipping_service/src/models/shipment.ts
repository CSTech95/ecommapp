import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Shipment {
	@PrimaryGeneratedColumn({ type: "int" })
	@PrimaryGeneratedColumn("uuid")
	id: string | undefined;

	@Column({ type: "varchar" })
	userId: string | undefined;

	@Column({ type: "varchar" })
	orderId: string | undefined;

	@Column({ type: "varchar" })
	shippingCompany: string | undefined;

	@Column({ type: "varchar" })
	expectedDelivery: string | undefined;

	@Column({ type: "varchar" })
	hops: string | undefined;

	@Column({ type: "varchar" })
	createdAt: number | undefined | string;
}
