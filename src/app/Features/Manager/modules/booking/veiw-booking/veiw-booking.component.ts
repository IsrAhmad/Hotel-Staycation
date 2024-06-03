import { HttpErrorResponse } from '@angular/common/http';
import { IVeiwBookingResponse ,IVeiwBookingData ,IUser ,IRoom ,IBooking} from './../models/ibooking';
import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-veiw-booking',
  templateUrl: './veiw-booking.component.html',
  styleUrls: ['./veiw-booking.component.scss']
})
export class VeiwBookingComponent implements OnInit {
  constructor(private _BookingService:BookingService){
    this.veiwBooking('66525ca46ebbbefbc1a3e89f');
  }


  user:IUser= {
    _id: '',
    userName: ''
  }
  
  room:IRoom ={
    _id: '',
    roomNumber: ''
  }

  booking:IBooking={
    _id: '',
    startDate: '',
    endDate: '',
    totalPrice: 0,
    user: this.user,
    room: this.room,
    status: '',
    createdAt: '',
    updatedAt: '',
    stripeChargeId: ''

  }

  bookingData:IVeiwBookingData={
    booking:this.booking

  }

  ngOnInit(): void {
    
  }



  veiwBooking(id:string){
    this._BookingService.veiwBooking(id).subscribe({
      next:(res:IVeiwBookingResponse)=>{
       // console.log(res);
        this.bookingData=res.data;
      },error:(err:HttpErrorResponse)=>{
      //  console.log(err);
      }
    })
  }
}
