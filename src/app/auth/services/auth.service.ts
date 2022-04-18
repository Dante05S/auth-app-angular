import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url:string = 'http://localhost:3000/api/auth'

  constructor(private http:HttpClient) { }

  public async registerUser(user:User):Promise<any>
  {
    return this.http.post(`${this.url}/new`,user);
  }

  public async loginUser(user:User):Promise<any>
  {
    return this.http.post(`${this.url}`,user);
  }
}
