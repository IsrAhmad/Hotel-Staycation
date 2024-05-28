import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ILogIn } from '../model/I-log-in';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }


  login(userData:FormGroup):Observable<ILogIn>{
    return this._HttpClient.post<ILogIn>('portal/users/login',userData)
  }

}
