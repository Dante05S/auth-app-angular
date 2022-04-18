import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import {RegisterModule} from './pages/register/register.module';
import {LoginModule} from './pages/login/login.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RegisterModule,
    LoginModule
  ]
})
export class AuthModule { }
