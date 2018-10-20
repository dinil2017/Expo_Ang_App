import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { MasterEditComponent } from "./master-edit/master-edit.component";
import { MasterRoutingModule } from "./master-routing.module";
import { MasterComponent } from "./master.component";
import { DataTableModule } from "angular-6-datatable";
import { MasterService } from "./master.service";

@NgModule({
    declarations: [
      MasterComponent,
      MasterEditComponent
    ],
    imports: [CommonModule, SharedModule, ReactiveFormsModule, DataTableModule, MasterRoutingModule],
    providers: [MasterService]
  })
  export class MasterModule {}