import {
    Column,
    Entity,
    Generated,
    Index,
    JoinColumn,
    ManyToOne,
} from "typeorm";
import { Account } from "./account.entity";
import Model from "./base.entity";

export enum TransactionType {
    DEBIT = "debit",
    CREDIT = "credit",
}

export enum TransactionPurpose {
    TRANSFER = "transfer",
    DEPOSIT = "deposit",
    REVERSAL = "reversal",
}

@Entity("transactions")
export class Transaction extends Model {
    @Column({ type: "decimal", precision: 20, scale: 4, default: 0.0 })
    amount: number;

    @ManyToOne(() => Account)
    @JoinColumn()
    account: Account;

    @Column({ type: "enum", enum: TransactionType })
    txnType: TransactionType;

    @Column({ type: "enum", enum: TransactionPurpose })
    txnPurpose: TransactionPurpose;

    @Column()
    @Generated("uuid")
    reference: string;

    @Column({ type: "decimal", precision: 20, scale: 4, default: 0.0 })
    balanceBefore: number;

    @Column({ type: "decimal", precision: 20, scale: 4, default: 0.0 })
    balanceAfter: number;
}
