import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ILogIn } from '../model/ILogin';
import { IForgot } from '../model/IForgot';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }


  login(userData:FormGroup):Observable<ILogIn>{
    return this._HttpClient.post<ILogIn>('portal/users/login',userData)
  }
  forgetPass(mail:FormGroup):Observable<IForgot>{
    return this._HttpClient.post<IForgot>('portal/users/forgot-password',mail)
  }
}
