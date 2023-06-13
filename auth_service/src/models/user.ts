import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number | undefined | string;

	@Column({ type: "varchar" })
	fName: string | undefined;

	@Column({ type: "varchar", nullable: false })
	email: string | undefined;

	@Column({ type: "varchar", nullable: false })
	password: string | undefined;

	@Column({ type: "varchar" })
	lName: string | undefined;

	@Column({ type: "varchar" })
	createdAt: number | undefined | string;

	@Column({ type: "varchar" })
	address: string | undefined;

	@Column({ type: "varchar" })
	state: string | undefined;

	@Column({ type: "integer" })
	zip: string | undefined;
}
