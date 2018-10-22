import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Account } from '../account.model';
import { AccountService } from '../account.service';
import { MasterService } from './../../master/master.service';
import { CodeMaster } from '../../master/codemaster.model';
import { SysParam } from '../../master/sysparam.model';

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

  currencyOptions: string[] = [];
  defaultCurrency: string = 'INR';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private masterService: MasterService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }
  initForm() {

    const currencyCodeMst: CodeMaster = this.masterService.getCodeMaster('CURRENCY');
    currencyCodeMst.codeValues.forEach(codeval => {
      this.currencyOptions.push(codeval);
    });

    const baseCurrency: SysParam = this.masterService.getSystemParam('BASE_CURRENCY');
    console.log(baseCurrency);
    this.defaultCurrency = baseCurrency.value;

    let _name = '';
    let _balance: number;
    let _currency: string = this.defaultCurrency;

    if (this.editMode) {
      this.editedAccount = this.accountService.getAccount(this.id);
      _name = this.editedAccount.name;
      _balance = this.editedAccount.balance;
      _currency = this.editedAccount.currency;
    }

    this.accountForm = new FormGroup({
      name: new FormControl(_name),
      balance: new FormControl(_balance),
      currency: new FormControl(_currency)
    });
    // this.accountForm.controls['currency'].setValue(_currency, {onlySelf: true});
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
