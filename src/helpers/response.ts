import { Response } from "express";

import { ResponseData } from "../types/reponses.types";

class Responses {
    static sendSuccessResponse = (
        res: Response,
        message: string,
        data: ResponseData,
        statusCode: number = 200
    ) => {
        return res.status(statusCode).json({
            status: true,
            message,
            data,
        });
    };

    static sendErrorResponse = (
        res: Response,
        message: string,
        data: ResponseData = null,
        statusCode: number = 400
    ) => {
        return res.status(statusCode).json({
            status: false,
            message,
            data,
        });
    };

    static handleValidationErrorResponse = (
        validatedData: ResponseData,
        res: Response
    ) => {
        const message = validatedData.details[0].message;
        return res.status(400).json({
            status: false,
            message,
        });
    };

    static makeResponse = (
        status: boolean,
        message: string,
        data: ResponseData | null,
        statusCode
    ) => {
        if (status) {
            return {
                status,
                message,
                data,
                statusCode,
            };
        }
        return {
            status,
            message,
            data,
            statusCode,
        };
    };
}

export default Responses;
