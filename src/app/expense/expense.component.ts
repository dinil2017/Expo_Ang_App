import { Expense } from './expense.model';
import { ExpenseService } from './expense.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  bgImgUrl =
    'https://elcapitalfinanciero.com/wp-content/uploads/2014/07/dinero-690x450.jpg';
  expenses: Expense[] = [];
  totalExpense: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expenseService: ExpenseService
  ) {}

  ngOnInit() {
    this.expenses = this.expenseService.getExpenses();
    this.calculateTotalExpense();

    this.expenseService.expenseChanged.subscribe((newExpeses: Expense[]) => {
      this.expenses = newExpeses;
      this.calculateTotalExpense();
    });
  }

  onAddExpense() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(id: number) {
    this.router.navigate([id, 'edit'], { relativeTo: this.route });
  }

  onDelete(id: number) {
    this.expenseService.deleteExpense(id);
  }

  calculateTotalExpense() {
    this.totalExpense = 0;
    if (this.expenses) {
      this.expenses.forEach(expense => {
        this.totalExpense += expense.expAmount;
      });
    }
  }
}
