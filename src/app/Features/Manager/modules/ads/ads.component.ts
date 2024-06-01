import { Component, OnInit } from '@angular/core';
import { AddEditViewAdsComponent } from './components/add-edit-view-ads/add-edit-view-ads.component';
import { MatDialog } from '@angular/material/dialog';
import { AdsService } from './services/ads.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {


constructor(public dialog:MatDialog ,private _AdsService:AdsService){

  }
  ngOnInit(): void {
    this.getAllads()
  }

allads:any
getAllads(){
  return this._AdsService.getAllAds().subscribe({
    next:(res)=>{
     this.allads = res;
     console.log(res)
    }
  })
}
  /////////add/edit/view
 openEditDialog(){

 }
 openViewAdsDialog(viewId: string, room: string, price: number, isActive: boolean): void {
  const dialogRef = this.dialog.open(AddEditViewAdsComponent, {
    data: { id: viewId, room: room, price: price, isActive: isActive },
  });
}
getAdsByID(id:string){
 this._AdsService.getADById(id).subscribe({
  next:(res)=>{
  console.log(res)
  }
 })
}

}
