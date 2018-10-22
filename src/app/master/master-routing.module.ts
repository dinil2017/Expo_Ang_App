import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { MasterComponent } from "./master.component";

const masterRoutes: Routes = [
    {
      path: 'master',
      component: MasterComponent,
      children: []
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
