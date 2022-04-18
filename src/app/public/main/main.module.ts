import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { MainContentComponent } from './components/main-content/main-content.component';


@NgModule({
  declarations: [
    MainComponent,
    NavigatorComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
