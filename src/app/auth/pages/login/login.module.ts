import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { LoginComponent } from './login.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    LoginComponent,
    NavigatorComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorTailorModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
