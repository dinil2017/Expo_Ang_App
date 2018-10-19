import { Account } from "./account.model";
import { Subject } from "rxjs";

export class AccountService {

    accountChanged: Subject<Account[]> = new Subject();


    accounts: Account[] = [
        new Account('ENBD', 5000, 'AED'),
        new Account('SBI', 5000, 'INR'),
    ]
    getAccounts() {
        return this.accounts;
    }
}