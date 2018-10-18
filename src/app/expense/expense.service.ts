import { Expense } from './expense.model';
import { Subject } from 'rxjs';
export class ExpenseService {

  expenseChanged: Subject<Expense[]> = new Subject();

  expenses: Expense[] = [
    {'expDate':new Date(), 'expItem': 'monthly', 'expAmount' :1250, 'expRemark':'Sep-18' },
    {'expDate':new Date(), 'expItem' :'shopping', 'expAmount' :100, 'expRemark':'Lulu' },
    {'expDate':new Date(), 'expItem' :'flight ticket', 'expAmount' :1500, 'expRemark':'Onam' },
    {'expDate':new Date(), 'expItem' :'shopping', 'expAmount' :340, 'expRemark':'' },
    {'expDate':new Date(), 'expItem' :'movie', 'expAmount' :70, 'expRemark':'Koode' },
    {'expDate':new Date(), 'expItem' :'fuel', 'expAmount' :100, 'expRemark':'' },
    {'expDate':new Date(), 'expItem' :'dewa', 'expAmount' :550, 'expRemark':'Aug-18' },
    {'expDate':new Date(), 'expItem' :'etisalat', 'expAmount' :300, 'expRemark':'Aug-18' },
    {'expDate':new Date(), 'expItem' :'fuel', 'expAmount' :50, 'expRemark':'' }
  ];

  getExpenses() {
    return this.expenses;
  }
  getExpense(id: number) {
    return this.expenses[id];
  }

  updateExpense(id: number, expense: Expense) {
    this.expenses[id] = expense;
    this.expenseChanged.next(this.expenses);
  }

  addExpense(expense: Expense) {
    this.expenses.push(expense);
    this.expenseChanged.next(this.expenses);
  }

  deleteExpense(index: number) {
    this.expenses.splice(index, 1);
    this.expenseChanged.next(this.expenses);
  }

}
