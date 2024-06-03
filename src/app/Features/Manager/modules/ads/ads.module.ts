import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsComponent } from './ads.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UpdateViewAdsComponent } from './components/update-view-ads/update-view-ads.component';



@NgModule({
  declarations: [
    AdsComponent,
    UpdateViewAdsComponent,
  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    SharedModule
  ]
})
export class AdsModule { }
