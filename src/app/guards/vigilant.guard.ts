import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VigilantGuard implements CanActivate {

  constructor(private cookieService:CookieService, private router:Router){}

  redirect(flag:boolean)
  {
    if(!flag)
    {
      this.router.navigate(['/auth/login']);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const cookie:boolean = this.cookieService.check('access_token');
    this.redirect(cookie);

    return cookie;
  }

}
