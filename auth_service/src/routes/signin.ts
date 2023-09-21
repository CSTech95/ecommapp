import { Router } from "express";

import AuthController from "../controllers/auth.controller";

const router = Router();
router.post("/api/users/signin", AuthController.apiSignInUser);

export { router as signInRouter };
