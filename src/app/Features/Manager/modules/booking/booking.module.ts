import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { VeiwBookingComponent } from './veiw-booking/veiw-booking.component';


@NgModule({
  declarations: [
    BookingComponent,
    VeiwBookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
