import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';

@NgModule({
  declarations: [
    RegisterComponent,
    NavigatorComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Este campo es requerido',
          minlength: ({ requiredLength, actualLength }) =>
                      `El campo debe tener como minimo ${requiredLength} caracteres`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    })
  ],
  exports:[RegisterComponent]
})
export class RegisterModule { }
