import { IRommCommentResponse, IRoomReveiwResponse ,IRoomReveiwRequest} from './../../models/room-details';
import { Component } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RoomDetailsService } from '../../services/room-details.service';
import { ToastrService } from 'ngx-toastr';
import { StarRatingModule, StarRatingConfigService } from 'angular-star-rating';



@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [StarRatingModule,
    CommonModule, CarouselModule, MatCardModule, MatNativeDateModule, MatFormFieldModule, MatDatepickerModule, SharedModule],
  providers: [StarRatingConfigService],
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss',]
})
export class RoomDetailsComponent {
  today = new Date();
  month = this.today.getMonth();
  year = this.today.getFullYear();
  roomRes: any;
  rating: number = 0;

  constructor (private _FormBuilder:FormBuilder, private _HttpClient: HttpClient, private _RoomDetailsService: RoomDetailsService, private _ToastrService: ToastrService) {

  }
  ngOnInit(): void {
    this.getRoomById(this.id);
  }
  id: string = '65aecf82e815336ace213ab7';

  reviewForm: FormGroup = new FormGroup({
    roomId: new FormControl(this.id, [Validators.required]),
    rating: new FormControl(null, [Validators.required]),
    review: new FormControl(null, [Validators.required]),
  });


  onAddReview( reviewForm: FormGroup) {
    this._RoomDetailsService.AddRoomreview(reviewForm.value).subscribe({
      next: (res: IRoomReveiwResponse) => {
        //console.log(res);
      },
      error: (err: HttpErrorResponse) => {
        //console.log(err);
        this._ToastrService.error(err.error.message);
        this.reviewForm.reset();
      },
      complete: () => {
        this._ToastrService.success('Your Review Added Successfuly ');
        this.reviewForm.reset();
      }
    })
  }

  commentForm: FormGroup = new FormGroup({
    roomId: new FormControl(this.id, [Validators.required]),
    comment: new FormControl(null, [Validators.required])
  })

  onAddComment(commentForm: FormGroup) {
    this._RoomDetailsService.AddRoomComment(commentForm).subscribe({
      next: (res: IRommCommentResponse) => {
       // console.log(res);
      },
      error: (err: HttpErrorResponse) => {
        //console.log(err);
        this._ToastrService.error(err.error.message);
      },
      complete: () => {
        this._ToastrService.success('Your Comment Added Successfuly ');
        this.commentForm.reset();
      }
    })
  }

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

  getRoomById(id: string) {
    this._RoomDetailsService.getRoomById(id).subscribe({
      next: (res: any) => {
        this.roomRes = res.data.room
        console.log(this.roomRes);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }

  campaignOne = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 13)),
    end: new FormControl(new Date(this.year, this.month, 16)),
  });

  getDiscountedPrice(price: number, discount: number ,capicity:number): number {
    return (price - discount)*capicity;
  }






}
