// import { Request, Response, NextFunction } from "express";
// import Joi from "joi";
// import Responses from "../../helpers/response";

// class AuthValidations {
//     static validateRegisterPayload(
//         req: Request,
//         res: Response,
//         next: NextFunction
//     ) {
//         const schema = Joi.object({
//             email: Joi.string().email().required(),
//             password: Joi.string()
//                 .min(8)
//                 .pattern(
//                     new RegExp(
//                         "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
//                     )
//                 )
//                 .required()
//                 .messages({
//                     "string.pattern.base":
//                         "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character:",
//                     "string.min": "Password must be at least 8 characters long",
//                 }),
//             phoneNumber: Joi.string().required().min(11).max(11),
//         });

//         const { error } = schema.validate(req.body, { allowUnknown: false });

//         if (error) {
//             return Responses.handleValidationErrorResponse(error, res);
//         }

//         next();
//     }

//     static validateLoginPayload(
//         req: Request,
//         res: Response,
//         next: NextFunction
//     ) {
//         const schema = Joi.object({
//             email: Joi.string().email().required(),
//             password: Joi.string().min(8).required(),
//         });

//         const { error } = schema.validate(req.body, { allowUnknown: false });

//         if (error) {
//             return Responses.handleValidationErrorResponse(error, res);
//         }

//         next();
//     }
// }

// export default AuthValidations;
