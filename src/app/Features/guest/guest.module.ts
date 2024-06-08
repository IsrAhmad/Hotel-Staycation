import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UpDateCommentComponent } from './components/room-details/components/up-date-comment/up-date-comment.component';




@NgModule({
  declarations: [
    GuestComponent,
    UpDateCommentComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharedModule
  ]
})
export class GuestModule { }
