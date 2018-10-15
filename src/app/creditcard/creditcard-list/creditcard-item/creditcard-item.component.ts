import { Component, OnInit, Input } from '@angular/core';

import { CreditCard } from './../../creditcard.model';

@Component({
  selector: 'app-creditcard-item',
  templateUrl: './creditcard-item.component.html',
  styleUrls: ['./creditcard-item.component.css']
})
export class CreditcardItemComponent implements OnInit {

  @Input() index: number;
  @Input() card: CreditCard;

  constructor() { }

  ngOnInit() {
  }

}
