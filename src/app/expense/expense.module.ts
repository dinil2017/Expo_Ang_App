import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DataTableModule } from 'angular-6-datatable';

import { ExpenseEditComponent } from "./expense-edit/expense-edit.component";
import { ExpenseRoutingModule } from "./expense-routing.module";
import { ExpenseComponent } from "./expense.component";
import { ExpenseService } from "./expense.service";

@NgModule({
  declarations: [ExpenseComponent, ExpenseEditComponent],
  imports: [CommonModule, ReactiveFormsModule, DataTableModule, ExpenseRoutingModule],
  providers: [ExpenseService]
})
export class ExpenseModule {

}
