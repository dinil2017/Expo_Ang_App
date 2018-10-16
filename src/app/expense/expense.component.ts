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

  public data : any 

  ngOnInit() {
    this.data = [
    {'expDate':new Date(), 'expItem': 'monthly', 'expAmount' :'1250', 'expRemark':'Sep-18' },
    {'expDate':new Date(), 'expItem' :'shopping', 'expAmount' :'100', 'expRemark':'Lulu' },
    {'expDate':new Date(), 'expItem' :'flight ticket', 'expAmount' :'1500', 'expRemark':'Onam' },
    {'expDate':new Date(), 'expItem' :'shopping', 'expAmount' :'340', 'expRemark':'' },
    {'expDate':new Date(), 'expItem' :'movie', 'expAmount' :'70', 'expRemark':'Koode' },
    {'expDate':new Date(), 'expItem' :'fuel', 'expAmount' :'100', 'expRemark':'' },
    {'expDate':new Date(), 'expItem' :'dewa', 'expAmount' :'550', 'expRemark':'Aug-18' },
    {'expDate':new Date(), 'expItem' :'etisalat', 'expAmount' :'300', 'expRemark':'Aug-18' },
    {'expDate':new Date(), 'expItem' :'fuel', 'expAmount' :'50', 'expRemark':'' }
   ]
  }
  onEdit() {
    this.data.push({'expDate':new Date(), 'expItem': 'NEWWWW', 'expAmount' :'34', 'expRemark':'Noida' });
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onAddExpense() {
    this.data.push({'expDate':new Date(), 'expItem' :'fuel', 'expAmount' :'100', 'expRemark':'' });
  }

}
