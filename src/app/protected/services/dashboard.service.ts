import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private url:string = 'http://localhost:3000/api/auth'

  constructor(private http:HttpClient) { }

  public getUser()
  {
    return this.http.get(`${this.url}`);
  }
}
