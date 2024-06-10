
import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GuestService } from '../../services/guest.service';
import { BookingService } from '../../services/Booking.service';
import { IBookingDetailsRes } from '../../models/IBookingResponse';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
 
  id:string=''

  bookingResp:IBookingDetailsRes={
    success:false,
    message:'',
    data:{
      booking:{
    startDate: '',
    endDate: '',
    totalPrice: 0,
    user: {
      _id:'',
      userName:"",
    },
    room: {
      _id:'',
      roomNumber:''
    },
    status: '',
    _id: '',
    
      }
    }
  }

  constructor(
     private _formBuilder: FormBuilder ,  
     private _ActivatedRoute: ActivatedRoute ,
     private _BookingService:BookingService,
     private _ToastrService:ToastrService) {}

     PaymentFormGroup = this._formBuilder.group({
      cardNumber: ['', Validators.required],
    });


  ngOnInit(): void {
   
    this.id = this._ActivatedRoute.snapshot.params['id']
    this.getBookingById(this.id);
  }


  getBookingById(id:string):void{

    this._BookingService.getBookingById(id).subscribe({
      next: (res) => {
          console.log(res);
        this.bookingResp = res;
      }, error: (err) => {
        this._ToastrService.error(err.error.message)
      }, complete: () => {


      }
    })
  }

 



}
