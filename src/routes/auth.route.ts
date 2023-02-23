import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import AuthValidations from "../middlewares/validations/auth.validation";

const authRouter = Router();

authRouter.post(
    "/register",
    AuthValidations.validateRegisterPayload,
    AuthController.registerUser
);

authRouter.post(
    "/login",
    AuthValidations.validateLoginPayload,
    AuthController.loginUser
);

export default authRouter;
