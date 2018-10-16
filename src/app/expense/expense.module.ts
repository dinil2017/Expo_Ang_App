import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ExpenseEditComponent } from "./expense-edit/expense-edit.component";
import { ExpenseRoutingModule } from "./expense-routing.module";
import { ExpenseComponent } from "./expense.component";

@NgModule({
  declarations: [ExpenseComponent, ExpenseEditComponent],
  imports: [CommonModule, ExpenseRoutingModule]
})
export class ExpenseModule {

}
