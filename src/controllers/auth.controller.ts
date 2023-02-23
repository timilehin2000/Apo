import { Request, Response } from "express";
import Responses from "../helpers/response";
import AuthLogics from "../logics/auth.logic";

class AuthController {
    static async registerUser(req: Request, res: Response) {
        const { email, phoneNumber, password } = req.body;

        try {
            const { status, message, data, statusCode } =
                await AuthLogics.registerUser({
                    email,
                    phoneNumber,
                    password,
                });
            if (status) {
                return Responses.sendSuccessResponse(
                    res,
                    message,
                    data,
                    statusCode
                );
            }
            return Responses.sendErrorResponse(res, message, {}, statusCode);
        } catch (err) {
            return Responses.sendErrorResponse(
                res,
                "Sorry an unknown error occured",
                null,
                500
            );
        }
    }

    static async loginUser(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            const { status, message, data, statusCode } =
                await AuthLogics.loginUser({ email, password });

            if (status) {
                return Responses.sendSuccessResponse(
                    res,
                    message,
                    data,
                    statusCode
                );
            }
            return Responses.sendErrorResponse(res, message, {}, statusCode);
        } catch (err) {
            console.log(err);
            return Responses.sendErrorResponse(
                res,
                "Sorry an unknown error occured",
                null,
                500
            );
        }
    }
}

export default AuthController;
