import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { IBooking, IParams } from './models/ibooking';
import { BookingService } from './services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  headerText:string ='Booking Table Details' ;
  listOfFacilities :any;

  displayedColumns: string[] = ['Room number','Price'
  ,'Start date','End date', 'Guest' , 'Actions'];

  bookingData:IBooking[]=[]
  search!:string;
  pageSize = 10;
  pageIndex = 0;
  totalCount!:number;

    params:IParams= {
    page :this.pageIndex,
    size:this.pageSize
  }

  sortedBookings:IBooking[] =[];

  constructor(private _BookingService:BookingService,private _Router:Router,public dialog: MatDialog, private toastr: ToastrService){}

  ngOnInit(): void {
    this.getAllBookings();

  }
  sortData(sort: Sort) {
    const data = this.bookingData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedBookings = data;
      return;
    }
    this.sortedBookings = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'price':
          return this.compare(a.totalPrice, b.totalPrice, isAsc);
        case 'guest':
          return this.compare(a.user.userName, b.user.userName, isAsc);
        case 'roomNumber':
          return this.compare(a.room.roomNumber, b.room.roomNumber, isAsc);
        default:
          return 0;
      }
    });
  }
    compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }



  getAllBookings(){

    this._BookingService.getAllBookings(this.params).subscribe({
      next:(res:any)=>{

      this.bookingData= res.data.booking;
      this.sortedBookings= this.bookingData.slice();
      console.log(this.sortedBookings);
      this.totalCount =res.data.totalCount;

      console.log(res.data);

//add toaster
      },
      error:(err)=>{

      },
      complete:()=>{

      }
    })

  }
     //for paginaton
  changePage(e: PageEvent) {
    this.params.page = e.pageIndex + 1;
    this.params.size = e.pageSize;
    this.getAllBookings();
  }

  resetSearchInput() {
    this. search= '';
    this.getAllBookings();
  }
  filtetByRoomNumber(searchValue :HTMLInputElement){
    if (searchValue) {
      this.sortedBookings = this.sortedBookings.filter(p => p.room.roomNumber === searchValue.value);
      this.totalCount =this.sortedBookings.length
    }
  }


  deleteThisItem(id:number,name:string):void{
    this.openDeleteDialog('700ms','350ms',id,name,'Room')

  }

  openDeleteDialog(enterAnimationDuration: string, exitAnimationDuration: string,id:number,itname:string,componentName:string): void {  }

  deleteBooking(id:string):void{  }

}
