import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Expense } from '../expense.model';
import { ExpenseService } from './../expense.service';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit {
  id: number;
  editMode = false;
  editedExpense: Expense;
  expForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private expenseService: ExpenseService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  initForm(): any {
    let _expDate: Date;
    let _expItem = '';
    let _expAmount: number;;
    let _expRemark = '';


    if (this.editMode) {
      this.editedExpense = this.expenseService.getExpense(this.id);
      _expDate = this.editedExpense.expDate;
      _expItem = this.editedExpense.expItem;
      _expAmount = this.editedExpense.expAmount;
      _expRemark = this.editedExpense.expRemark;
    }
    this.expForm = new FormGroup({
      expDate: new FormControl(_expDate, Validators.required),
      expItem: new FormControl(_expItem, Validators.required),
      expAmount: new FormControl(_expAmount, Validators.required),
      expRemark: new FormControl(_expRemark)
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.expenseService.updateExpense(this.id, this.expForm.value);
      this.router.navigate(['/expense']);
    } else {
      this.expenseService.addExpense(this.expForm.value);
      this.expForm.reset();
    }
  }

  onCancel() {
    if (this.editMode) {
      this.router.navigate([this.id], { relativeTo: this.route.parent });
    } else {
      this.router.navigate(['/expense']);
    }
  }

}
