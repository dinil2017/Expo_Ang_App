import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from './account.service';
import { Account } from './account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts: Account[] = [];
  totalBalance: number = 0;

  constructor(private route: ActivatedRoute,
    private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    this.accounts = this.accountService.getAccounts();
    this.calculateTotalBalance();

    this.accountService.accountChanged.subscribe((newAccounts: Account[]) => {
      this.accounts = newAccounts;
      this.calculateTotalBalance();
    });
  }

  onAddAccount() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(id: number) {
    this.router.navigate([id, 'edit'], { relativeTo: this.route });
  }

  calculateTotalBalance() {
    this.totalBalance = 0;
    if (this.accounts) {
      this.accounts.forEach(account => {
        this.totalBalance += account.balance;
      });
    }
  }

}
