import { Router } from "express";

import AuthController from "../controllers/auth.controller";

const router = Router();

router.post("/api/users/signup", AuthController.apiSignUpUser);

export { router as signupRouter };
