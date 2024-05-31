import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditRoomComponent } from './components/add-edit-room/add-edit-room.component';


@NgModule({
  declarations: [
    RoomsComponent,
    AddEditRoomComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    SharedModule
  ]
})
export class RoomsModule { }
