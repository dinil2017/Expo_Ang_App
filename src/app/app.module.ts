import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataStorageService } from './shared/data-storage.service';
import { ExpenseModule } from './expense/expense.module';
import { CreditcardModule } from './creditcard/creditcard.module';
import { AccountModule } from './account/account.module';
import { MasterModule } from './master/master.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    AccountModule,
    ExpenseModule,
    CreditcardModule,
    MasterModule
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
