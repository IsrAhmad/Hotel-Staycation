import { IAllFavRes } from './../models/IFavorite';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private _HttpClient:HttpClient) { }

  getAllFavRooms():Observable<IAllFavRes>{
    return this._HttpClient.get<IAllFavRes>(`portal/favorite-rooms`)
  }
}
