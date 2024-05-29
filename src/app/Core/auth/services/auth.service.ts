import { IResetRequest, IResetResponse } from './../model/reset-password';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ILogIn } from '../model/ILogin';

import { IForgot } from '../model/IForgot';

import { IRegister } from '../model/IRegister.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }


  login(userData:FormGroup):Observable<ILogIn>{
    return this._HttpClient.post<ILogIn>('admin/users/login',userData)
  }


  resetPassword(data:IResetRequest):Observable<IResetResponse>{
    return this._HttpClient.post<IResetResponse>('admin/users/reset-password' ,data)
  }


  forgetPass(mail:FormGroup):Observable<IForgot>{
    return this._HttpClient.post<IForgot>('admin/users/forgot-password',mail)

  }

  register(userData:FormData):Observable<IRegister>{
    return this._HttpClient.post<IRegister>('admin/users',userData)
  }

  }
