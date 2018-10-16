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
    {'expDate':new Date(), 'expItem': 'testItem1', 'expAmount' :'34', 'expRemark':'Noida' },
    {'expDate':new Date(), 'expItem' :'testItem2', 'expAmount' :'34', 'expRemark':'Noida' },
    {'expDate':new Date(), 'expItem' :'testItem3', 'expAmount' :'34', 'expRemark':'Noida' },
    {'expDate':new Date(), 'expItem' :'testItem4', 'expAmount' :'34', 'expRemark':'Noida' },
    {'expDate':new Date(), 'expItem' :'testItem5', 'expAmount' :'34', 'expRemark':'Noida' },
    {'expDate':new Date(), 'expItem' :'testItem6', 'expAmount' :'34', 'expRemark':'Noida' },
    {'expDate':new Date(), 'expItem' :'testItem7', 'expAmount' :'34', 'expRemark':'Noida' },
    {'expDate':new Date(), 'expItem' :'testItem8', 'expAmount' :'34', 'expRemark':'Noida' },
    {'expDate':new Date(), 'expItem' :'testItem9', 'expAmount' :'34', 'expRemark':'Noida' }
   ]
  }
  onEdit() {
    this.data.push({'expDate':new Date(), 'expItem': 'NEWWWW', 'expAmount' :'34', 'expRemark':'Noida' });
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
