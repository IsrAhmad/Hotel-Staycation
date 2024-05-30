import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private _HttpClient: HttpClient) {}

  // getUserName(userName:string, name: string, imagePath:string, imgSrc:string,): Observable<any> {
  //   return this._HttpClient.get('Users/currentUser', {
  //     params: { userName: userName, name:name, imagePath: imagePath, imgSrc: imgSrc},
  //   });
  // }
  currentUser(): Observable<any> {
    return this._HttpClient.get('admin/users?page=1&size=10');
  }

}
