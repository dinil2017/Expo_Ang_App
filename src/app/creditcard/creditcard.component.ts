import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
  }

  onNewCard() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }




}
