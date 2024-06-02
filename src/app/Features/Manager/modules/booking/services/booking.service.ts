import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _HttpClient:HttpClient) { }


  getAllBookings(parmasData:any):Observable<any>{
    return this._HttpClient.get('admin/booking' , {params:parmasData})
  }


}
