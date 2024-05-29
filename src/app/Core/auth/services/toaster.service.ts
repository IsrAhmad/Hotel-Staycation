import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(private _MatSnackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._MatSnackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top', // 'top' or 'bottom'
      horizontalPosition: 'right', // 'start', 'center', 'end', 'left', 'right'
    });
  }
}
