import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { CreditCardService } from './../creditcard.service';

@Component({
  selector: 'app-creditcard-edit',
  templateUrl: './creditcard-edit.component.html',
  styleUrls: ['./creditcard-edit.component.css']
})
export class CreditcardEditComponent implements OnInit {
  editMode: boolean = false;
  id: number;
  ccForm: FormGroup;
  editedCard: import("h:/Angular-Projects/Angular6/expo-app/src/app/creditcard/creditcard.model").CreditCard;

  constructor(
    private route: ActivatedRoute,
    private creditcardService: CreditCardService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  initForm(): any {
    let _cardNo = '';
    let _bank = '';
    let _cardHolder = '';
    let _expiryDate: Date = new Date();
    let _limit = 0;
    let _dueAmount = 0;
    let _dueDate = new Date();

    if(this.editMode) {
      this.editedCard = this.creditcardService.getCreditCard(this.id);
      _cardNo = this.editedCard.cardNo;
      _bank = this.editedCard.bank;
      _cardHolder = this.editedCard.cardHolder;
      _expiryDate = this.editedCard.expiryDate;
      _limit = this.editedCard.limit;
      _dueAmount = this.editedCard.dueAmount;
      _dueDate = this.editedCard.dueDate;
    }
    this.ccForm = new FormGroup({
      cardNo: new FormControl(_cardNo, [
        Validators.required,
        Validators.minLength(16)
      ]),
      bank: new FormControl(_bank, Validators.required),
      cardHolder: new FormControl(_cardHolder, Validators.required),
      expiryDate: new FormControl(_expiryDate, Validators.required),
      limit: new FormControl(_limit, Validators.required),
      dueAmount: new FormControl(_dueAmount, Validators.required),
      dueDate: new FormControl(_dueDate, Validators.required)
    });
  
  }

  onSubmit() {
    if(this.editMode) {
      this.creditcardService.updateCreditCard(this.id, this.ccForm.value);
    }
    else {
      this.creditcardService.addCreditCard(this.ccForm.value);
    }
  }
}
