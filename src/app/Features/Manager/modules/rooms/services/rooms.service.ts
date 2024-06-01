import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import {  IRoomResponse  ,IRoomVeiwResponse} from '../models/IRoom.model';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private _HttpClient:HttpClient) { }


  getAllRooms(parmasData:any):Observable<IRoomResponse>{
    return this._HttpClient.get<IRoomResponse>('admin/rooms' , {params:parmasData})
  }

  veiwRoom(id:string):Observable<IRoomVeiwResponse>{
    return this._HttpClient.get<IRoomVeiwResponse>(`admin/rooms/${id}`);

  }

  
  
}
