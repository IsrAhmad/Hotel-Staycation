import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { HomeComponent } from './components/home/home.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';


@NgModule({
  declarations: [
    ManagerComponent,
    HomeComponent,
    BookingListComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
