// import { User } from "../entity/user.entity";
// import Responses from "../helpers/response";
// import Utils from "../helpers/utils/utils";
// import UserServices from "../services/user.service";
// import { createNewUserPayload, loginUserPayload } from "../types/user.types";

// class AuthLogics {
//     static async registerUser(payload: createNewUserPayload) {
//         const existingUser = await UserServices.findUserByEmail(
//             payload.email.toLowerCase()
//         );

//         if (existingUser) {
//             return Responses.makeResponse(
//                 false,
//                 "User already exists",
//                 {},
//                 400
//             );
//         }

//         const user = await UserServices.createNewUser(payload);

//         // const account =

//         return Responses.makeResponse(
//             true,
//             "Successfully created a new user",
//             {
//                 userDetails: user,
//             },
//             200
//         );
//     }

//     static async loginUser(payload: loginUserPayload) {
//         const existingUser = await UserServices.findUserByEmail(
//             payload.email.toLowerCase()
//         );

//         if (!existingUser) {
//             return Responses.makeResponse(
//                 false,
//                 "Email or password is incorrect",
//                 {},
//                 400
//             );
//         }

//         const comparePassword = await User.comparePasswords(
//             payload.password,
//             existingUser.password
//         );

//         console.log(comparePassword);

//         if (!comparePassword) {
//             return Responses.makeResponse(
//                 false,
//                 "Email or password is incorrect",
//                 {},
//                 400
//             );
//         }

//         const token = Utils.signToken(existingUser.email);

//         return Responses.makeResponse(
//             true,
//             "Login Successful",
//             {
//                 userDetails: { ...existingUser, token },
//             },
//             200
//         );
//     }
// }

// export default AuthLogics;
