import { IRommCommentResponse, IRoomReveiwResponse, IRoomReveiwRequest, IRommCommentData, IRoomReviewData } from './../../models/room-details';
import { Component, ViewChild } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RoomDetailsService } from '../../services/room-details.service';
import { ToastrService } from 'ngx-toastr';
import { StarRatingModule, StarRatingConfigService } from 'angular-star-rating';
import { ActivatedRoute } from '@angular/router';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [StarRatingModule,
    CommonModule, CarouselModule, MatCardModule, MatNativeDateModule, MatFormFieldModule,
    MatDatepickerModule, SharedModule, MatExpansionModule, MatIconModule, MatButtonModule, MatInputModule],
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
  commentsResponse!: IRommCommentData;
  reviewsResponse!: IRoomReviewData
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  id: string = '';
  reviewForm!: FormGroup;
  commentForm!: FormGroup;






  constructor(private _ActivatedRoute: ActivatedRoute, private _HttpClient: HttpClient,
    private _RoomDetailsService: RoomDetailsService, private _ToastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id']
    this.getRoomById(this.id);
    this.getAllRoomComments(this.id);
    this.getAllRoomReviews(this.id);
    this.reviewForm = new FormGroup({
      roomId: new FormControl(this.id, [Validators.required]),
      rating: new FormControl(null, [Validators.required]),
      review: new FormControl(null, [Validators.required]),
    });

    this.commentForm = new FormGroup({
      roomId: new FormControl(this.id, [Validators.required]),
      comment: new FormControl(null, [Validators.required])
    })
  }

  campaignOne = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 13)),
    end: new FormControl(new Date(this.year, this.month, 16)),
  });

  onAddReview(reviewForm: FormGroup) {
    this._RoomDetailsService.AddRoomreview(reviewForm.value).subscribe({
      next: (res: IRoomReveiwResponse) => {
        // console.log(res);
      },
      error: (err: HttpErrorResponse) => {
        //  console.log(err);
        this._ToastrService.error(err.error.message);
        this.reviewForm.reset();
      },
      complete: () => {
        this._ToastrService.success('Your Review Added Successfuly ');
        this.reviewForm.reset();
        this.getAllRoomReviews(this.id);
      }
    })
  }



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
        this.getAllRoomComments(this.id);
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

  getDiscountedPrice(price: number, discount: number, capicity: number): number {
    return (price - discount) * capicity;
  }

  getAllRoomComments(id: string) {
    this._RoomDetailsService.getAllRoomComments(id).subscribe({
      next: (res) => {
        this.commentsResponse = res.data;
        //console.log(this.commentsResponse);
      }
    })
  }

  getAllRoomReviews(id: string) {
    this._RoomDetailsService.getAllRoomReviews(id).subscribe({
      next: (res) => {
        this.reviewsResponse = res.data;
        // console.log(this.reviewsResponse);
      }
    })
  }





}


