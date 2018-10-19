export class Account {
    name: string;
    balance: number;
    currency: string

    constructor(name: string, balance: number, currency: string) {
        this.name = name;
        this.balance = balance;
        this.currency = currency;
    }
}