import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IParams, IRoomResponse } from '../../rooms/models/IRoom.model';
import { IAdsResponse } from '../models/IAdsResponse';
import { IDelete } from 'src/app/shared/models/IDelete';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

constructor(private _HttpClient:HttpClient) { }

getAllAds(parmasData:IParams):Observable<IAdsResponse>{
  return this._HttpClient.get<IAdsResponse>('admin/ads' , {params:
    {page:parmasData.page,
    size:parmasData.size}})
}

deleteAds(id:number):Observable<IDelete>{
  return this._HttpClient.delete<IDelete>(`admin/ads/${id}`)
}

}
