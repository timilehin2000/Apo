import { User } from "../entity/user.entity";
import { AppDataSource } from "../config/data-source";
import { createNewUserPayload } from "../types/user.types";

const userRepository = AppDataSource.getRepository(User);

class UserServices {
    static async createNewUser(input: createNewUserPayload): Promise<User> {
        return await userRepository.save(userRepository.create({ ...input }));
    }

    static async findUserByEmail(email: string): Promise<User | null> {
        return await userRepository.findOneBy({ email });
    }

    static async findUserByPhoneNumber(
        phoneNumber: string
    ): Promise<User | null> {
        return await userRepository.findOneBy({ phoneNumber });
    }
}

export default UserServices;
