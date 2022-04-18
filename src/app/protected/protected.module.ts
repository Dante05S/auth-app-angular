import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardModule} from './dashboard/dashboard.module'
import { ProtectedRoutingModule } from './protected-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
