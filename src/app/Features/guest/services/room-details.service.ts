import {  IRoomReveiwResponse ,IRommCommentResponse, IRoomReveiwRequest} from './../models/room-details';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomDetailsService {
  constructor(private _HttpClient: HttpClient) { }


  getRoomById(id: string): Observable<any> {
    return this._HttpClient.get(`portal/rooms/${id}`)

  }

  AddRoomreview( data: any): Observable<IRoomReveiwResponse> {
    return this._HttpClient.post<IRoomReveiwResponse>(`portal/room-reviews`,  data)
  }

  AddRoomComment(data: FormGroup): Observable<IRommCommentResponse> {
    return this._HttpClient.post<IRommCommentResponse>(`portal/room-comments`, data)
  }
}
