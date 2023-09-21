import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, Contains } from "class-validator";

@Entity({ name: "user" })
export class User {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number | undefined | string;

	@Column({ type: "varchar" })
	fName: string | undefined;

	@Column({ type: "varchar" })
	lName: string | undefined;

	@Column({ type: "varchar", nullable: false })
	@IsEmail()
	@Contains("@") // This shouldn't be necessary I'm assuming due to the above @IsEmail annotation
	email: string | undefined;

	@Column({ type: "varchar", nullable: false })
	password: string = "";

	// Column with JSON data type
	@Column("simple-json", { nullable: true })
	otherInfo!: {
		createdAt: Date | number | undefined | string;

		address: string | undefined | any;

		state: string | undefined;

		zip: string | undefined;
	};
}
