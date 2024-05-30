import { IFacilitiesResponse, IData, IFacility, ICreatedBy, IAddAndEditFacRes } from './models/facilities';
import { Component, OnInit } from '@angular/core';
import { FacilitiesService } from './services/facilities.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddEditeViewFacilitiesComponent } from 'src/app/shared/components/add-edite-view-facilities/add-edite-view-facilities.component';

interface EditEvent {
  id: string;
  name: string;
}
@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {
  
  createdBy: ICreatedBy = {
    _id: '',
    userName: ''
  }
  facilities: IFacility = {
    _id: '',
    name: '',
    createdBy: this.createdBy,
    createdAt: '',
    updatedAt: ''
  }
  // data:any;

  // data: IData = {
  //   facilities: this.facilities[],
  //   totalCount: 10
  // }
  tableHeaders: string[] = [
    'Name',
    'Created By',
    'Created At',
    'Updated At',
    'Actions',
  ];

  data: any;

  editAddFacRes:IAddAndEditFacRes={
    success:false,
    message:'',
    data:{
      facility:{
    _id: '',
    name: '',
    createdAt: '',
    updatedAt: '',
    createdBy: {
      _id:'',
      userName:''
    }


      }
    }
  }

  constructor(private _FacilitiesService: FacilitiesService,
     private toastr: ToastrService ,
     private _Router:Router,
     private dialog: MatDialog) { }
  ngOnInit(): void {
    this.getAllFaclities();
  }

  getAllFaclities() {
    this._FacilitiesService.getAllFacilities().subscribe({
      next: (res: IFacilitiesResponse) => {
        console.log(res);
        this.data = res.data;
      }, error: (err: HttpErrorResponse) => {
        console.log(err)

      }, complete: () => {

      }
    })
  }

  editOrView(event: EditEvent,editOrNotType:boolean) {
   console.log(event)

   const dialogRef = this.dialog.open(AddEditeViewFacilitiesComponent, {
    data: {id:event.id, edit:editOrNotType,name:event.name},
     width: '25%' 
    
    });
    
    dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log( result);
    if(result){
    //edit here
    //api edit
    if(editOrNotType){
      this.editFaility(event.id,result)
    }
    console.log('edit api')
    }
    });


  }
  willBeDeleted(event: number) {
  //nvigate to delete component
  }


  addFacility():void{

    const dialogRef = this.dialog.open(AddEditeViewFacilitiesComponent, {
      data:{name:''},
       width: '25%' 
      
      });
      
      dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log( result);
      if(result){
      //add api
      console.log('add api')
      console.log( result.name);
      this.addFaility(result)
      
      }
      });

  }

  /*
  openAddOrEditOrViewFacDialog(facilityId?:string,editOrNotType?:boolean): void {
    if(facilityId){
    //edit or view
    console.log('editttOrView')
    
    const dialogRef = this.dialog.open(AddEditeViewFacilitiesComponent, {
    data: {id:facilityId, edit:editOrNotType,name:''},
    // width: '25%' // width here
    
    });
    
    dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log( result);
    if(result){
    //edit here
    //api edit
    console.log('edit api')
    }
    });
    }else{
    //add
    console.log('add')
    const dialogRef = this.dialog.open(AddEditeViewFacilitiesComponent, {
    data:{name:''},
    // width: '25%' // width here
    
    });
    
    dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log( result);
    if(result){
    //add api
    console.log('add api')
    
    }
    });}
    
    }*/
    
    
    editFaility(id:string,name:string):void{

      this._FacilitiesService.editFacility(id,name).subscribe({
        next: (res) => {
          console.log(res);
          this.editAddFacRes = res;
        }, error: (err) => {
          console.log(err)
          this.toastr.error(err.error.message)

        }, complete: () => {
          this.getAllFaclities()
          this.toastr.success(this.editAddFacRes.message)
  
        }
      })
    }

    addFaility(name:string):void{

      this._FacilitiesService.addFacility(name).subscribe({
        next: (res) => {
          console.log(res);
          this.editAddFacRes = res;
        }, error: (err) => {
          console.log(err)
          this.toastr.error(err.error.message)

  
        }, complete: () => {
          this.getAllFaclities()

          this.toastr.success(this.editAddFacRes.message)
        }
      })
    }

}
