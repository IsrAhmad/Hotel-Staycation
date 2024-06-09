import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule ,
    SharedModule,
    MatStepperModule,
    MatCardModule
  ]
})
export class PaymentModule { }
