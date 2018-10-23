import { Injectable } from '@angular/core';
import { Account } from "./account.model";
import { Subject } from "rxjs";
import { DataStorageService } from './../shared/data-storage.service';

@Injectable()
export class AccountService {

    accountChanged: Subject<Account[]> = new Subject();

    accounts: Account[] = [
        new Account('ENBD', 5000, 'AED'),
        new Account('SBI', 10000, 'INR'),
    ]

    constructor(private dataStorageService: DataStorageService) {

    }

    getAccounts() {
        return this.accounts;
    }

    getAccount(id: number) {
        return this.accounts[id];
    }

    updateAccount(id: number, account: Account) {
        this.accounts[id] = account;
        this.accountChanged.next(this.accounts);
    }

    addAccount(account: Account) {
        this.accounts.push(account);
        this.accountChanged.next(this.accounts);

    }

    deleteAccount(index: number) {
        this.accounts.splice(index, 1);
        this.accountChanged.next(this.accounts);
    }
}
