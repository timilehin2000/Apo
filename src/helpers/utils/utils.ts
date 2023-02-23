import jwt from "jsonwebtoken";

class Utils {
    static formatPhoneNumber(phoneNumber: string) {
        if (phoneNumber.startsWith("+")) {
            return phoneNumber.substring(1);
        } else if (phoneNumber.startsWith("0")) {
            return "234" + phoneNumber.substring(1);
        } else if (phoneNumber.startsWith("234")) {
            return phoneNumber;
        }
    }

    static signToken(email: string) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
            algorithm: "HS256",
            expiresIn: "3d",
        });

        return token;
    }
}

export default Utils;
