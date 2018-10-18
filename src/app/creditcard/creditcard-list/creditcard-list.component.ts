import { Component, OnInit } from '@angular/core';

import { CreditCard } from '../creditcard.model';
import { CreditCardService } from '../creditcard.service';

@Component({
  selector: 'app-creditcard-list',
  templateUrl: './creditcard-list.component.html',
  styleUrls: ['./creditcard-list.component.css']
})
export class CreditcardListComponent implements OnInit {

  cards: CreditCard[];

  constructor(private creditCardService: CreditCardService) {
    this.cards = this.creditCardService.getCreditCards();
  }

  ngOnInit() { }


}
