import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormGroup, FormControl } from '@angular/forms';


import {MatNativeDateModule} from '@angular/material/core';

import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [CommonModule,CarouselModule ,MatCardModule,MatNativeDateModule,MatFormFieldModule ,MatDatepickerModule ,SharedModule],
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent {

   today = new Date();
 month = this.today.getMonth();
 year = this.today.getFullYear();
 //will be edited by isrea
  constructor(private _HttpClient:HttpClient){

  }
  ngOnInit(): void {
  //will be edited by isrea
   this.getRoomById('65a9968ea5d9953dd42d11aa');
  }
  roomRes:any;
  sliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
//will be edited by isrea
  getRoomById(id: string) {
    this._HttpClient.get('portal/rooms/65ae31e0e815336ace2108d5').subscribe({
      next: (res:any) => {
        this.roomRes = res.data.room
        console.log(this.roomRes);
      },
    
    })
  }
  campaignOne = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 13)),
    end: new FormControl(new Date(this.year, this.month, 16)),
  });

}
