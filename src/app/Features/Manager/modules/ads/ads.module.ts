import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsComponent } from './ads.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditViewAdsComponent } from './components/add-edit-view-ads/add-edit-view-ads.component';
import { AddNewAdComponent } from './components/add-new-ad/add-new-ad.component';




@NgModule({
  declarations: [
    AdsComponent,
    AddEditViewAdsComponent,
    AddNewAdComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    SharedModule
  ]
})
export class AdsModule { }
