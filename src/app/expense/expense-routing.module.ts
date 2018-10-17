import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpenseEditComponent } from './expense-edit/expense-edit.component';
import { ExpenseComponent } from './expense.component';

const expRoutes: Routes = [
  {
    path: 'expense',
    component: ExpenseComponent,
    children: [
      { path: 'new', component: ExpenseEditComponent },
      { path: ':id/edit', component: ExpenseEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(expRoutes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule {}
