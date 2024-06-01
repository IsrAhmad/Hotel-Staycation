import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsComponent } from './ads.component';
import { AddEditViewAdsComponent } from './components/add-edit-view-ads/add-edit-view-ads.component';


const routes: Routes = [{ path: '', component: AdsComponent },
{ path: 'addNewAd', component: AddEditViewAdsComponent },
{ path: 'editAd/:id', component: AddEditViewAdsComponent },
{ path: 'viewAd/:id/:mode', component: AddEditViewAdsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
