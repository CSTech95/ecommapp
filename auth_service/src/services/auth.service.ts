import AppDataSource from "../../config/ormconfig";
import { validate } from "class-validator";
import { User } from "../models/user";
import bcrypt from "bcrypt";
import { isPassword } from "../utils/ispassword";

export default class AuthService {
	constructor() {}

	static async signUp(fName: string, lName: string, email: string, hashedPassword: string, otherInfo?: any) {
		try {
			const existingUser = await AppDataSource.getRepository(User).findOneBy({ email });

			if (existingUser) {
				return "User Exists"; // Fix this
			}

			const user = new User();

			user.fName = fName;
			user.lName = lName;
			user.email = email;
			user.password = hashedPassword;
			user.otherInfo = {
				address: otherInfo.address,
				state: otherInfo.state,
				zip: otherInfo.zip,
				createdAt: new Date(),
			};

			const errors = await validate(user);
			if (errors.length > 0) {
				throw new Error(`Validation failed!`);
			}

			const userRepository = AppDataSource.getRepository(User);
			await userRepository.save(user);

			return user;
		} catch (error) {
			console.log("Could not register user");
		}
	}

	//TODO:: SignIn Service
	static async signIn(email: string, userEnteredPassword: string) {
		try {
			const existingUser: User | null = await AppDataSource.getRepository(User).findOneBy({ email });

			const validatePassword = await isPassword(userEnteredPassword, existingUser!.password);

			if (existingUser && validatePassword) {
				return existingUser;
			}

			return existingUser ? existingUser : false;
		} catch (error) {
			console.log("Could not sign in user");
		}
	}
	static async getAllUsers() {
		try {
			const userRepository = await AppDataSource.getRepository(User);
			const users = await userRepository.find();
			if (!users) {
				return [];
			}
			return users;
		} catch (error) {
			console.log("Could not retrieve users");
		}
	}
}
