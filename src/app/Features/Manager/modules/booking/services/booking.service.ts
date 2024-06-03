import { IVeiwBookingResponse } from './../models/ibooking';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDelete } from 'src/app/shared/models/IDelete';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _HttpClient:HttpClient) { }

  veiwBooking(id:string):Observable<IVeiwBookingResponse>{
    return this._HttpClient.get<IVeiwBookingResponse>(`admin/booking/${id}`)
  }

 

  getAllBookings(parmasData:any):Observable<any>{
    return this._HttpClient.get('admin/booking' , {params:parmasData})
  }


  deleteBooking(id:number):Observable<IDelete>{
    return this._HttpClient.delete<IDelete>(`admin/booking/${id}`)
  }


}
