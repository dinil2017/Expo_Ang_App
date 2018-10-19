import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Account } from '../account.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {

  id: number;
  editMode = false;
  editedAccount: Account;
  accountForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router, 
    private accountService: AccountService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }
  initForm() {
    let _name = '';
    let _balance: number;;

    if (this.editMode) {
      this.editedAccount = this.accountService.getAccount(this.id);
      _name = this.editedAccount.name;
      _balance = this.editedAccount.balance;
    }

    this.accountForm = new FormGroup({
      name: new FormControl(_name),
      balance: new FormControl(_balance)
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.accountService.updateAccount(this.id, this.accountForm.value);
      this.router.navigate(['/account']);
    } else {
      this.accountService.addAccount(this.accountForm.value);
      this.accountForm.reset();
    }
  }

  onCancel() {
    this.router.navigate(['/account']);
  }
  
  onDelete() {
    this.accountService.deleteAccount(this.id);
    this.router.navigate(['/account']);
  }
}
