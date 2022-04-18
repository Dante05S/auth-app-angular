import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor(private cookieService:CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token:string = this.cookieService.get('access_token');
    let req = request;
    if(token)
    {
      req = request.clone(
        {
          setHeaders:
          {
            Authorization: `Bearer ${token}`
          }
        })
    }

    return next.handle(req);
  }

}
