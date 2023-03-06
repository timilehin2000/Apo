import { Account } from "../entity/account.entity";
import { AppDataSource } from "../config/data-source";
import { createNewUserPayload } from "../types/user.types";

const accountRepository = AppDataSource.getRepository(Account);

class UserServices {
    // static async createNewAccount(userId: string): Promise<Account> {
    //     return await accountRepository.save(
    //         accountRepository.create({ user: userId })
    //     );
    // }
    // static async findAccountByUserEmail(email: string): Promise<User | null> {
    //     return await accountRepository.findOneBy({ email });
    // }
    // static async findUserByPhoneNumber(
    //     phoneNumber: string
    // ): Promise<User | null> {
    //     return await userRepository.findOneBy({ phoneNumber });
    // }
}

export default UserServices;
