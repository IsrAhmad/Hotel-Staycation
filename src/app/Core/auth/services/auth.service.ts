import { IResetRequest, IResetResponse } from './../model/reset-password';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ILogIn } from '../model/ILogin';

import { IForgot } from '../model/IForgot';

import { IRegister } from '../model/IRegister.model';
import { Router } from '@angular/router';
import { IUserResponse } from 'src/app/shared/models/iUser';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role: string | null = null;

  constructor(private _HttpClient:HttpClient, private _Router:Router) {
    if (localStorage.getItem('token') !== null) {
      this.getRole();
    }
  }

  login(userData:FormGroup):Observable<ILogIn>{
    return this._HttpClient.post<ILogIn>('admin/users/login',userData)
  }


  resetPassword(data:IResetRequest):Observable<IResetResponse>{
    return this._HttpClient.post<IResetResponse>('portal/users/reset-password' ,data)
  }


  forgetPass(mail:FormGroup):Observable<IForgot>{
    return this._HttpClient.post<IForgot>('portal/users/forgot-password',mail)

  }

  register(userData:FormData):Observable<IRegister>{
    return this._HttpClient.post<IRegister>('admin/users',userData)
  }
  getRole() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (token !== null && role !== null) {
      this.role = role;
    } else {
    }
  }

  logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    this._Router.navigate(['/auth']);
  }


  getUserProfile(id: string): Observable<IUserResponse> {
    return this._HttpClient.get<IUserResponse>(`admin/users/${id}`);
  }

  }
