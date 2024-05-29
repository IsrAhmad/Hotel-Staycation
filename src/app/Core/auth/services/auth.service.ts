import { IResetRequest, IResetResponse } from './../model/reset-password';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ILogIn } from '../model/ILogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }


  login(userData:FormGroup):Observable<ILogIn>{
    return this._HttpClient.post<ILogIn>('portal/users/login',userData)
  }

  resetPassword(data:IResetRequest):Observable<IResetResponse>{
    return this._HttpClient.post<IResetResponse>('portal/users/reset-password' ,data)
  }

}
