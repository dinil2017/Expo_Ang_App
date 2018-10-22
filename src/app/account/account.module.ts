import { MasterModule } from './../master/master.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { AccountService } from "./account.service";
import { AccountComponent } from "./account.component";
import { AccountEditComponent } from "./account-edit/account-edit.component";
import { AccountingRoutingModule } from "./account-routing.module";

@NgModule({
    declarations: [
        AccountComponent,
        AccountEditComponent
    ],
    imports: [CommonModule, ReactiveFormsModule, AccountingRoutingModule, MasterModule],
    providers: [AccountService]
})
export class AccountModule {

}
