import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, Contains } from "class-validator";

@Entity()
export class User {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number | undefined | string;

	@Column({ type: "varchar" })
	fName: string | undefined;

	@Column({ type: "varchar", nullable: false })
	@IsEmail() // TODO Research this, it allows non-email input for some reason
	@Contains("@") // This shouldn't be necessary I'm assuming due to the above @IsEmail annotation
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
