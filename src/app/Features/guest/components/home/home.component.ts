import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatDialogModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  popularImages = [
    { src: '../../../assets/images/home-3.png', alt: 'Home 3' },
    { src: '../../../assets/images/home-4.png', alt: 'Home 4' },
    { src: '../../../assets/images/home-5.png', alt: 'Home 5' },
    { src: '../../../assets/images/home-6.png', alt: 'Home 6' }
  ];

  images = [
    { src: '../../../assets/images/home-7.png', alt: 'Home 7' },
    { src: '../../../assets/images/home-8.png', alt: 'Home 8' },
    { src: '../../../assets/images/home-9.png', alt: 'Home 9' },
    { src: '../../../assets/images/home-10.png', alt: 'Home 10' }
  ];

  livingImages = [
    { src: '../../../assets/images/home-11.png', alt: 'Home 11' },
    { src: '../../../assets/images/home-12.png', alt: 'Home 12' },
    { src: '../../../assets/images/home-13.png', alt: 'Home 13' },
    { src: '../../../assets/images/home-14.png', alt: 'Home 14' }
  ];

  adImages = [
    { src: '../../../assets/images/home-15.png', alt: 'Home 11' },
    { src: '../../../assets/images/home-16.png', alt: 'Home 12' },
    { src: '../../../assets/images/home-17.png', alt: 'Home 13' },
    { src: '../../../assets/images/home-18.png', alt: 'Home 14' }
  ];

constructor(public dialog: MatDialog){}

openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  this.dialog.open(DeleteComponent, {
    width: '500px',
    enterAnimationDuration,
    exitAnimationDuration,
  });
}


}
