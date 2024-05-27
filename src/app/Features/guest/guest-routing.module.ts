import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestComponent } from './guest.component';

const routes: Routes = [{ path: '', component: GuestComponent }, { path: 'payment', loadChildren: () => import('./modules/payment/payment.module').then(m => m.PaymentModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
