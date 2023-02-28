import bcrypt from "bcrypt";
import { BeforeInsert, Column, Entity, Index } from "typeorm";
import Utils from "../helpers/utils/utils";
import Model from "./base.entity";

@Entity("users")
export class User extends Model {
    @Index({ unique: true })
    @Column()
    email: string;

    @Column()
    phoneNumber: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    profilePicture: string;

    @Column({ nullable: true, unique: true })
    userName: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    @BeforeInsert()
    formatPhoneNumber() {
        this.phoneNumber = Utils.formatPhoneNumber(this.phoneNumber);
    }

    static async comparePasswords(
        userPassword: string,
        hashedPassword: string
    ) {
        return await bcrypt.compare(userPassword, hashedPassword);
    }
}
