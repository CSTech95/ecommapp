import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { validate } from "class-validator";
//import { validateRequest, BadRequestError } from "@adecomm/common";

import { Password } from "../services/password";
import { User } from "../models/user";
import AppDataSource from "../../config/ormconfig";
import AuthController from "../controllers/auth.controller";

const router = express.Router();
//TODO :: Error Handling
router.post("/api/users/signin", AuthController.apiSignInUser);

export { router as signInRouter };
