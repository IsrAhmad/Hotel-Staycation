import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NativeDateAdapter} from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { GuestService } from '../../services/guest.service';
import { IAdsResponse } from 'src/app/Features/Manager/modules/ads/models/IAdsResponse';
import { ToastrService } from 'ngx-toastr';
import { IFavoriteResponse } from '../favorite/models/IFavorite';
import {  Router } from '@angular/router';
import { IRoomResponse } from 'src/app/Features/Manager/modules/rooms/models/IRoom.model';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatDialogModule,MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,MatCardModule ,MatDatepickerModule ,SharedModule,MatDialogModule,CarouselModule
  ],
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

  testimonialImages = [
    { src: '../../../assets/images/home-19.png', alt: 'Home 19' },
  ];

  stars = new Array(5);

  today = new Date();
 month = this.today.getMonth();
 year = this.today.getFullYear();


 userAds:IAdsResponse={
  success:false,
  message:'',
  data:{
    totalCount:0,
    ads:[]
  }
}

roomsRes:IRoomResponse={
  success:false,
  message:'',
  data:{
    totalCount:0,
    rooms:[]
  }

}

fav!: IFavoriteResponse ;

roomsOption: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  margin: 20,
  navText: [
    '<i class="fa-solid fa-caret-left"></i>',
    '<i class="fa-solid fa-caret-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    740: {
      items: 3,
    },
    940: {
      items: 4,
    },
  },
  nav: true,
};


constructor(public dialog: MatDialog,private _GuestService:GuestService, private _ToastrService: ToastrService
  , private _router: Router
){}
ngOnInit(): void {
  this.getAllAds()
  this.getAllRooms({})
  //this.getAllReviews(this.tableOfReviews)*/
  
}



campaignOne = new FormGroup({
  start: new FormControl(new Date(this.year, this.month, 13)),
  end: new FormControl(new Date(this.year, this.month, 16)),
});


capacity: number = 0; // Initial value
  loginToFav: any = localStorage.getItem('role');

  incrementValue() {
    this.capacity++;
  }

  decrementValue() {
    if (this.capacity > 0) {
      this.capacity--;
    }
  }
  imagesToShow: any[] = [];
  tableData: any;
 // tableUserAds: IAds[] = [];
  tableDataRooms: any[] = [];

  lang: any = localStorage.getItem('lang');
 // constructor(public dialog: MatDialog, private _AdsUserService: AdsUserService,
 // private _roomDetailsService: RoomDetailsService, private _router: Router, private _HelperService: HelperService, private _ToastrService: ToastrService) { }

  tableOfReviews:any[]=[];
  


  BookingForm: FormGroup = new FormGroup({
    startDate: new FormControl(null),
    endDate: new FormControl(null),
  })

  handleForm(data: FormGroup): void {


  }

  
  getAllAds() {
    this._GuestService.getAllAds().subscribe({
      next: (res) => {
        console.log(res)
        this.userAds = res;
      //  this.tableUserAds = res.data.ads.slice(0, 4);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  
  getAllRooms(data: any) {
    this._GuestService.getAllRooms(data).subscribe({
      next: (res) => {
        console.log(res)
        this.roomsRes = res;

      },
      error: (err) => {
        console.log(err)


      }
    })
  }


/*



  getAllReviews(id:any){
    this._AdsUserService.getAllRoomReviews(id).subscribe({
      next:(res)=>{
        console.log(res)
        this.tableData=res;
        this.tableOfReviews=res.data.roomReviews
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
*/


saveRoomInFav(roomId: string) {
  this._GuestService.saveFavRoom(roomId).subscribe({
    next: (res) => {
      this.fav = res;
      console.log(this.fav)
    },
    error: (err) => {
      console.log(err)
      this._ToastrService.error(err.error.message)

      
    },
    complete: () => {
      this._ToastrService.success(this.fav.message)

    }
  })
}

goLogin():void{

  this._ToastrService.error('First login')

  this._router.navigate(['/auth'])

}

}
