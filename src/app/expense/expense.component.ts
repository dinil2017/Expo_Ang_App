import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  bgImgUrl = 'https://elcapitalfinanciero.com/wp-content/uploads/2014/07/dinero-690x450.jpg';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
