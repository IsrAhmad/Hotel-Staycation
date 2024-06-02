import { Component, OnInit } from '@angular/core';
import { AddEditViewAdsComponent } from './components/add-edit-view-ads/add-edit-view-ads.component';
import { MatDialog } from '@angular/material/dialog';
import { AdsService } from './services/ads.service';
import { ActivatedRoute } from '@angular/router';
import { AddNewAdComponent } from './components/add-new-ad/add-new-ad.component';


@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

AdID!:string;
viewAds!:boolean;
roomName:string='';
isActive:boolean = true;
discount:number=0
constructor(public dialog:MatDialog ,private _AdsService:AdsService ,
  private _ActivatedRoute: ActivatedRoute
){
   this.AdID = this._ActivatedRoute.snapshot.params['id'];
  
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

 openViewAdsDialog(viewId: string, room: string, discount: number, isActive: boolean ,view:boolean): void {
 this.viewAds= true
  const dialogRef = this.dialog.open(AddEditViewAdsComponent, {
    data: { id: viewId, room: room, discount: discount, isActive: isActive, view:view },
  });
}

getAdsByID(id:string){
 this._AdsService.getADById(id).subscribe({
  next:(res)=>{
  console.log(res)
  }
 })
}
 /////////update 
 openUpdateDialog(adID: string ,isActiveUpdated:boolean,updatedDiscount:string  ): void {
  const dialogRef = this.dialog.open(AddEditViewAdsComponent, {

    data: {id:adID,isActive:isActiveUpdated ,discount:updatedDiscount  ,},
  });
  //need to handle name ?
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   
    //check result 
    if (result) {
      console.log(result)
     // this.updateAdsItem(adID, result);
      
    }
  });
}

updateAdsItem(id: string, data:any) {
 

  this._AdsService.updateADItem(id,data ).subscribe({
    next: (res) => {
      console.log(res)
    }, error: () => {

    }, complete: () => {
      // to load data again after adding new ads
      this.getAllads();
    }
  });
}
//add
openAddDialog() : void {
  const dialogRef = this.dialog.open(AddNewAdComponent, {

    data: {room:this.roomName,discount:this.discount ,isActive:this.isActive ,},
  });
  //need to handle name ?
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   
    //check result 
    if (result) {
      console.log(result)
     this.addAdsItem( result);
      
    }
  });
}

addAdsItem( data:any) {
 

  this._AdsService.addADItem(data ).subscribe({
    next: (res) => {
      console.log(res)
    }, error: () => {

    }, complete: () => {
      // to load data again after adding new ads
      this.getAllads();
    }
  });
}

}
