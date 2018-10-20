import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { MasterComponent } from "./master.component";
import { MasterEditComponent } from "./master-edit/master-edit.component";

const masterRoutes: Routes = [
    {
      path: 'master',
      component: MasterComponent,
      children: [
        { path: 'new', component: MasterEditComponent },        
        { path: ':id/edit', component: MasterEditComponent }
      ]
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(masterRoutes)
    ],
    exports: [RouterModule]
  
  })
  export class MasterRoutingModule {
  
  }