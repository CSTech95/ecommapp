import bcrypt from "bcrypt";

export async function isPassword(enteredPassword: string, userModelPassword: string) {
	const match = await bcrypt.compare(enteredPassword, userModelPassword);

	if (match) {
		return true;
	} else {
		return false;
	}
}
