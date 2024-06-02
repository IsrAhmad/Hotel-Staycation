import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
export interface IAds {
  room?: string
  discount: number
  isActive: boolean
}
@Injectable({
  providedIn: 'root'
})
export class AdsService {

constructor(private _HttpClient:HttpClient) { }


//will be edited any type any 
getAllAds(){
  return this._HttpClient.get(`admin/ads`);
}
updateADItem(id:string , data:IAds):Observable<any>
{
 return this._HttpClient.put(`admin/ads/${id}` , data)
}
viewADItem(id:string):Observable<any>{
  return this._HttpClient.get(`admin/ads/${id}`);
}
addADItem(paramsDAta:IAds):Observable<any>{
  return this._HttpClient.post(`admin/ads` ,paramsDAta)
}
getADById(id:string):Observable<any>{
  return this._HttpClient.get<any>(`admin/rooms/${id}`);

}





}
