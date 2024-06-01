import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VeiwRoomComponent } from './components/veiw-room/veiw-room.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    RoomsComponent,
    VeiwRoomComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    SharedModule,
    MatSliderModule
  ]
})
export class RoomsModule { }
