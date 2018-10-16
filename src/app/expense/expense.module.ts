import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DataTableModule } from 'angular-6-datatable';

import { ExpenseEditComponent } from "./expense-edit/expense-edit.component";
import { ExpenseRoutingModule } from "./expense-routing.module";
import { ExpenseComponent } from "./expense.component";

@NgModule({
  declarations: [ExpenseComponent, ExpenseEditComponent],
  imports: [CommonModule, DataTableModule, ExpenseRoutingModule]
})
export class ExpenseModule {

}
