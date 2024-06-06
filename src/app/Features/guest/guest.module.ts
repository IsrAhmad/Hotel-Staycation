import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GuestComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharedModule
  ]
})
export class GuestModule { }
