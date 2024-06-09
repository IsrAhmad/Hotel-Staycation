import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkModeSubject.asObservable();

  constructor() {
    // Load theme preference from local storage or any other source
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    this.setDarkMode(isDarkMode);
  }

  setDarkMode(isDarkMode: boolean) {
    console.log(isDarkMode)
    this.isDarkModeSubject.next(isDarkMode);
  }
}
