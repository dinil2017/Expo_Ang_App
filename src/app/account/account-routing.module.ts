import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AccountComponent } from "./account.component";
import { AccountEditComponent } from "./account-edit/account-edit.component";

const accountRoutes: Routes = [
    {
      path: 'account',
      component: AccountComponent,
      children: [
        { path: 'new', component: AccountEditComponent },        
        { path: ':id/edit', component: AccountEditComponent }
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(accountRoutes)],
    exports: [RouterModule]
})
export class AccountingRoutingModule {}