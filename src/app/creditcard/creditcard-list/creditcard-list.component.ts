import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CreditCard } from '../creditcard.model';
import { CreditCardService } from '../creditcard.service';

@Component({
  selector: 'app-creditcard-list',
  templateUrl: './creditcard-list.component.html',
  styleUrls: ['./creditcard-list.component.css']
})
export class CreditcardListComponent implements OnInit {

  cards: CreditCard[];

  constructor(private creditCardService: CreditCardService,
    private route: ActivatedRoute, private router: Router) {
    this.cards = this.creditCardService.getCreditCards();
  }

  ngOnInit() { }

  onNewCard() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
