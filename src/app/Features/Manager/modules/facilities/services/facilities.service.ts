import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFacilitiesResponse } from '../models/facilities';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  constructor(private _HttpClient:HttpClient) { }

  getAllFacilities():Observable<IFacilitiesResponse>{
    return this._HttpClient.get<IFacilitiesResponse>(`admin/room-facilities`)
  }
}
