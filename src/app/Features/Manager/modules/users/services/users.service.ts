import { IAddAdminRequest, IAddAdminResponse } from './../models/users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) { }

  addAdmin(userData:FormData):Observable<IAddAdminResponse>{
    return this._HttpClient.post<IAddAdminResponse>('admin/users',userData)
  }
}
