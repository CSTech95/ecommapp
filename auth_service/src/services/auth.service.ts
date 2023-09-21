import AppDataSource from "../../config/ormconfig";
import { validate } from "class-validator";
import { User } from "../models/user";
import bcrypt from "bcrypt";

export default class AuthService {
	constructor() {}
	static async signUp(fName: string, lName: string, email: string, hashedPassword: string, otherInfo?: any) {
		try {
			//const userRepository = AppDataSource.getRepository(User);
			//const allProducts = await userRepository.find();
			//const { fName, lName, email, password, otherInfo } = req.body;
			const existingUser = await AppDataSource.getRepository(User).findOneBy({ email });

			if (existingUser) {
				return "User Exists"; // Fix this
			}

			//const hashedPassword = await bcrypt.hash(password, 10);
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
				//createdAt: new Date().toLocaleString(),
			};

			const errors = await validate(user);
			if (errors.length > 0) {
				throw new Error(`Validation failed!`);
			}

			const userRepository = AppDataSource.getRepository(User);
			await userRepository.save(user);

			return user;

			//console.log("All Products ", allProducts);
			//return allProducts;
		} catch (error) {
			console.log("Could not register user");
		}
	}
}
