import { IFacilitiesResponse, IData, IFacility, ICreatedBy } from './models/facilities';
import { Component, OnInit } from '@angular/core';
import { FacilitiesService } from './services/facilities.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';


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
  constructor(private _FacilitiesService: FacilitiesService, private toastr: ToastrService ,private _Router:Router,public dialog: MatDialog) { }
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

  willBeEdited(event: number) {
   //nvigate to edit component
  }
  willBeDeleted(event: number) {
    console.log(event);
    this.openDeleteDialog('700ms','350ms',event)
  }

  willBeViewed(event: number) {
    //nvigate to view component
  }
  // DELETE_DIALOG
  openDeleteDialog(enterAnimationDuration: string, exitAnimationDuration: string,id:number): void {
    const dialo =this.dialog.open(DeleteComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:{
        comp:'fac',
        id:id
      }
    });
    dialo.afterClosed().subscribe(res=>{
      this.deleteFacility(res)
    })
  }
  // DELETE_FUNCTION 
  deleteFacility(id:number){
    this._FacilitiesService.deleteFacility(id).subscribe({
      next:res=>{
        console.log(res);
        this.toastr.success('item Deleted succssfully')
      },
      error:err=>{
        console.log(err);
        this.toastr.error('there is a problem')
      },
      complete:()=>{
        this.getAllFaclities()
      }
    })
  }
}
