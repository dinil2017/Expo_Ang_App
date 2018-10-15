import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CreditcardDetailComponent } from "./creditcard-detail/creditcard-detail.component";
import { CreditcardEditComponent } from "./creditcard-edit/creditcard-edit.component";
import { CreditcardComponent } from "./creditcard.component";

const creditCardRoutes: Routes = [
  {
    path: 'creditcard',
    component: CreditcardComponent,
    children: [
      { path: 'new', component: CreditcardEditComponent },
      { path: ':id', component: CreditcardDetailComponent },
      { path: ':id/edit', component: CreditcardEditComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(creditCardRoutes)
  ],
  exports: [RouterModule]

})
export class CreditcardRoutingModule {

}
