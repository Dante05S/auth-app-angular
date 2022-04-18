import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {AsideComponent} from './components/aside/aside.component';
import {ContentComponent} from './components/content/content.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AsideComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
