import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestComponent } from './guest.component';

const routes: Routes = [
  { path: '', component: GuestComponent, children: [
    {path: '' , redirectTo: 'home' , pathMatch: 'full'},
    { path: 'home',  loadChildren: () => import('../guest/components/home/home.component').then(m => m.HomeComponent)},
    { path: 'explore',  loadChildren: () => import('../guest/components/explore/explore.component').then(m => m.ExploreComponent)},
    { path: 'favorite',  loadChildren: () => import('../guest/components/favorite/favorite.component').then(m => m.FavoriteComponent)},
    { path: 'room-details',  loadChildren: () => import('../guest/components/room-details/room-details.component').then(m => m.RoomDetailsComponent)},
  ] },
  { path: 'payment', loadChildren: () => import('./modules/payment/payment.module').then(m => m.PaymentModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
