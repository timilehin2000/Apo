import { Column, Entity, Generated, JoinColumn, OneToOne } from "typeorm";
import Model from "./base.entity";
import { User } from "./user.entity";

@Entity("accounts")
export class Account extends Model {
    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @Column({
        type: "decimal",
        precision: 20,
        scale: 4,
        default: 0.0,
        nullable: true,
    })
    balance: number;
}
