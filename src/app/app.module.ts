import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { HeaderComponent } from './header/header.component';
import { DataStorageService } from './shared/data-storage.service';
import { ExpenseModule } from './expense/expense.module';
import { CreditcardModule } from './creditcard/creditcard.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountComponent,
    AccountEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExpenseModule,
    CreditcardModule
  ],
  providers: [AuthService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
