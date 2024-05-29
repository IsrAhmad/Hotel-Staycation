import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const baseUrl: string = 'https://154.41.228.234:3000/api/v0/';
    const token = localStorage.getItem('tokenOfUserr');
    let x = request.clone({
      url: baseUrl + request.url,
      setHeaders: {

        //'Authorization': `${token}`

        'Authorization':`Bearer ${token}`

      }
    })
    return next.handle(x);
  }
}
