import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';



const appRoutes: Routes = [
  { path: '', component: AccountComponent, pathMatch: 'full' },
  { path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
