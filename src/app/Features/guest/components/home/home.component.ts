import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatDialogModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
constructor(public dialog: MatDialog){}

openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  this.dialog.open(DeleteComponent, {
    width: '500px',
    enterAnimationDuration,
    exitAnimationDuration,
  });
}


}
