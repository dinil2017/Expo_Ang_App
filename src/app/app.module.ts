import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { HeaderComponent } from './header/header.component';
import { DataStorageService } from './shared/data-storage.service';
import { ExpenseModule } from './expense/expense.module';
import { CreditcardModule } from './creditcard/creditcard.module';
import { AccountModule } from './account/account.module';
import { MasterModule } from './master/master.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    ExpenseModule,
    CreditcardModule,
    MasterModule
  ],
  providers: [AuthService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
