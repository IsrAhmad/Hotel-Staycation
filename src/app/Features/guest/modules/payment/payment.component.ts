import { GuestService } from './../../services/guest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IExplorParms } from '../../models/IExplorParms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  startDate: string = '';
  endDate: string = '';
  capacity: number = 0;

  constructor(private route: ActivatedRoute,private _GuestService:GuestService) {}

  parms:IExplorParms={}



  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.startDate = params['startDate'];
      this.endDate = params['endDate'];
      this.capacity = params['capacity'];
      console.log('Start Date:', this.startDate);
      console.log('End Date:', this.endDate);
      console.log('Capacity:', this.capacity);
    });

    this.parms={
      page:1,
      size:1000,
      startDate:this.startDate,
      endDate:this.endDate,
      capacity:this.capacity

    }

this.getAllRooms(this.parms)
  }

  roomsRes:any;
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




}
