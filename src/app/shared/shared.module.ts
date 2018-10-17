import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { CardNumMaskPipe } from './cardnumber-mask.pipe';

@NgModule({
  declarations: [
    DropdownDirective,
    CardNumMaskPipe
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    CardNumMaskPipe
  ]
})
export class SharedModule { }
