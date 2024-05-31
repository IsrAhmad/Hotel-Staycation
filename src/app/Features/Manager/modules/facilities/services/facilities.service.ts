import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddAndEditFacRes, IFacilitiesResponse } from '../models/facilities';
import { IParams } from '../../rooms/models/IRoom.model';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  constructor(private _HttpClient:HttpClient) { }

  getAllFacilities(parmasData:any):Observable<IFacilitiesResponse>{
    return this._HttpClient.get<IFacilitiesResponse>('admin/room-facilities' ,{params:parmasData})
  }

  addFacility(name:string):Observable<IAddAndEditFacRes>{
    return this._HttpClient.post<IAddAndEditFacRes>(`admin/room-facilities`,{name})
  }
  editFacility(id:string,name:string):Observable<IAddAndEditFacRes>{
    return this._HttpClient.put<IAddAndEditFacRes>(`admin/room-facilities/${id}`,{name})
  }



}
