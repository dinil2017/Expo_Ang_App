import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';

import { SharedModule } from '../shared/shared.module';
import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { DataTableModule } from 'angular-6-datatable';
import { MasterService } from './master.service';

@NgModule({
  declarations: [MasterComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    DataTableModule,
    MasterRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [MasterService]
})
export class MasterModule {}
