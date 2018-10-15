import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreditcardDetailComponent } from './creditcard-detail/creditcard-detail.component';
import { CreditcardEditComponent } from './creditcard-edit/creditcard-edit.component';
import { CreditcardItemComponent } from './creditcard-list/creditcard-item/creditcard-item.component';
import { CreditcardListComponent } from './creditcard-list/creditcard-list.component';
import { CreditcardRoutingModule } from './creditcard-routing.module';
import { CreditcardComponent } from './creditcard.component';
import { CreditCardService } from './creditcard.service';
import { DropdownDirective } from './../shared/dropdown.directive';

@NgModule({
  declarations: [
    CreditcardComponent,
    CreditcardListComponent,
    CreditcardItemComponent,
    CreditcardDetailComponent,
    CreditcardEditComponent,
    DropdownDirective
  ],
  imports: [CommonModule, ReactiveFormsModule, CreditcardRoutingModule],
  providers: [CreditCardService]
})
export class CreditcardModule {}

