import { Params, ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CreditCard } from '../creditcard.model';
import { CreditCardService } from './../creditcard.service';

@Component({
  selector: 'app-creditcard-detail',
  templateUrl: './creditcard-detail.component.html',
  styleUrls: ['./creditcard-detail.component.css']
})
export class CreditcardDetailComponent implements OnInit {
  card: CreditCard;
  index: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private creditCardService: CreditCardService
  ) {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['id'];
      this.card = this.creditCardService.getCreditCard(this.index);
    });
  }

  ngOnInit() {}

  onEditCard() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteCard() {
    this.creditCardService.deleteCreditCard(this.index);
    this.router.navigate(['/']);
  }
}
