import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ILogIn } from '../model/ILogin';
import { IRegister } from '../model/IRegister.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }


  login(userData:FormGroup):Observable<ILogIn>{
    return this._HttpClient.post<ILogIn>('portal/users/login',userData)
  }

  
  register(userData:FormData):Observable<IRegister>{
    return this._HttpClient.post<IRegister>('portal/users',userData)
  }


  forgetPass(mail:object):Observable<any>{
    return this._HttpClient.post('portal/users/forgot-password',mail)
  }

}
