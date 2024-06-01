import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { VeiwRoomComponent } from './components/veiw-room/veiw-room.component';

const routes: Routes = [{ path: '', component: RoomsComponent }
  ,{ path: `veiw/:id`, component: VeiwRoomComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
