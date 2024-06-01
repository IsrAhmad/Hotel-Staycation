import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

constructor(private _HttpClient:HttpClient) { }


//will be edited any type any 
getAllAds(){
  return this._HttpClient.get(`admin/ads`);
}
updateADItem(id:string , paramsDAta:any):Observable<any>
{
 return this._HttpClient.post(`admin/ads/${id}` , {params:paramsDAta})
}
viewADItem(id:string):Observable<any>{
  return this._HttpClient.get(`admin/ads/${id}`);
}
addADItem(paramsDAta:any):Observable<any>{
  return this._HttpClient.post(`admin/ads` ,{params:paramsDAta})
}
getADById(id:string):Observable<any>{
  return this._HttpClient.get<any>(`admin/rooms/${id}`);

}





}
