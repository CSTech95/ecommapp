import { Router } from "express";

import { currentUser, requireAuth } from "@adecomm/common";
import AuthController from "../controllers/auth.controller";

const router = Router();

router.get("/api/users/currentuser", currentUser, AuthController.apiGetCurrentUser);

export { router as currentUserRouter };
