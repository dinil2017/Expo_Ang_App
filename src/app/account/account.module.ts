import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountService } from "./account.service";
import { AccountComponent } from "./account.component";
import { AccountEditComponent } from "./account-edit/account-edit.component";
import { AccountingRoutingModule } from "./account-routing.module";

@NgModule({
    declarations: [
        AccountComponent,
        AccountEditComponent
    ],
    imports: [CommonModule, AccountingRoutingModule],
    providers: [AccountService]
})
export class AccountModule {

}