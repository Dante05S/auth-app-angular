import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../../../services/auth.service';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  flagError: boolean = false;
  msgError: string = "";
  formLogin: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private authService:AuthService, private cookieService:CookieService,private router:Router) { }

  ngOnInit(): void
  {
    this.formLogin = this.formBuilder.group(
      {
        name:['',
        [
          Validators.required,
          Validators.minLength(8)
        ]],
        email: ['',
        [
          Validators.required,
          Validators.email
        ]],
        password: ['',
        [
          Validators.required,
          Validators.minLength(8)
        ]]
      })
  }

  send()
  {
    if(this.formLogin.valid)
    {
      this.authService.registerUser(this.formLogin.value).then(res =>
        {
          res.subscribe((data:any)=>
          {
            console.log(data);
            console.log('Se ha registrado correctamente');
            this.cookieService.set('access_token', data.token, 1, '/');
            this.router.navigate(['/dashboard']);
          },
          (err:any)=>
          {
            console.log(err);
            this.msgError = err.error.msg;
            this.flagError = true;
          });
        });
    }
  }

}
