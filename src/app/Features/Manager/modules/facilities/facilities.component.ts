import { IFacilitiesResponse, IData, IFacility, ICreatedBy, IAddAndEditFacRes } from './models/facilities';
import { Component, OnInit } from '@angular/core';
import { FacilitiesService } from './services/facilities.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';

import { IParams } from '../rooms/models/IRoom.model';
import { PageEvent } from '@angular/material/paginator';
import { AddEditeViewFacilitiesComponent } from './components/add-edite-view-facilities/add-edite-view-facilities.component';

interface EditEvent {
  id: number;
  name: string;
}
@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {
  search!: string;

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
    'Created by',
    'Created at',
    'Updated at',
    'Actions',
  ];
  totalCount!: number;
  pageSize = 10;
  pageIndex = 0;
  params: IParams = {
    page: this.pageIndex,
    size: this.pageSize

  }

  facilitiesData: any;
  data: any;
  facilitiesdta:any;


  constructor(private _FacilitiesService: FacilitiesService,
    private toastr: ToastrService, private _Router: Router, public dialog: MatDialog) { }

  editAddFacRes: IAddAndEditFacRes = {
    success: false,
    message: '',
    data: {
      facility: {
        _id: '',
        name: '',
        createdAt: '',
        updatedAt: '',
        createdBy: {
          _id: '',
          userName: ''
        }


      }
    }
  }

  //   constructor(private _FacilitiesService: FacilitiesService,
  //      private toastr: ToastrService ,
  //      private _Router:Router,

  // private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllFaclities();
  }

  getAllFaclities() {
    this._FacilitiesService.getAllFacilities(this.params).subscribe({
      next: (res: IFacilitiesResponse) => {
      //  console.log(res)
        this.facilitiesData = res.data.facilities;
        this.facilitiesdta=res.data;
        //console.log(this.facilitiesData);
        this.totalCount = res.data.totalCount;
        // console.log(this.totalCount)
      }, error: (err: HttpErrorResponse) => {
        // console.log(err)

      }, complete: () => {

      }
    })
  }
  //for paginaton
  changePage(e: PageEvent) {
    this.params.page = e.pageIndex + 1;
    this.params.size = e.pageSize;
    this.getAllFaclities();
  }

  editOrView(event: EditEvent, editOrNotType: boolean) {
    console.log(event)

    const dialogRef = this.dialog.open(AddEditeViewFacilitiesComponent, {
      data: { id: event.id, edit: editOrNotType, name: event.name },
      width: '25%'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        //edit here
        //api edit
        if (editOrNotType) {
          this.editFaility(event.id, result)
        } else {
          this.openDeleteDialog('700ms', '350ms', event.id, event.name, 'Facility')

        }
      }
    });


  }
  willBeDeleted(event: any) {
    console.log(event);
    this.openDeleteDialog('700ms', '350ms', event.id, event.name, 'Facility')
  }


  addFacility(): void {
    const dialogRef = this.dialog.open(AddEditeViewFacilitiesComponent, {
      data: { name: '' },
      width: '25%'

    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      //console.log( result);
      if (result) {
        //add api
        //console.log('add api')
        // console.log( result.name);
        this.addFaility(result)

      }
    });

  }
  // DELETE_DIALOG
  openDeleteDialog(enterAnimationDuration: string, exitAnimationDuration: string, id: number, itname: string, componentName: string): void {
    const dialo = this.dialog.open(DeleteComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        comp: componentName,
        id: id,
        name: itname
      }
    });
    dialo.afterClosed().subscribe(res => {
      if (res != null) {
        this.deleteFacility(res)
      }
    })
  }
  // DELETE_FUNCTION
  deleteFacility(id: number) {
    this._FacilitiesService.deleteFacility(id).subscribe({
      next: res => {
        console.log(res);
      },
      error: err => {
        console.log(err);
        this.toastr.error(err.error.message)
      },
      complete: () => {
        this.toastr.success("Deleted succefully")

        this.getAllFaclities()
      }
    })
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


  editFaility(id: number, name: string): void {

    this._FacilitiesService.editFacility(id, name).subscribe({
      next: (res) => {
        // console.log(res);
        this.editAddFacRes = res;
      }, error: (err) => {
        // console.log(err)
        this.toastr.error(err.error.message)

      }, complete: () => {
        this.getAllFaclities()
        this.toastr.success(this.editAddFacRes.message)

      }
    })
  }

  addFaility(name: number): void {
    this._FacilitiesService.addFacility(name).subscribe({
      next: (res) => {
        //console.log(res);
        this.editAddFacRes = res;
      }, error: (err) => {
        //console.log(err)
        this.toastr.error(err.error.message)
      }, complete: () => {
        this.getAllFaclities()
        this.toastr.success(this.editAddFacRes.message)
      }
    })
  }


  resetSearcgInput() {
    this.search = '';
    this.getAllFaclities();
  }

  filtetByName(searchValue: HTMLInputElement) {
    if (searchValue) {
      this.facilitiesData = this.facilitiesData.filter((p: IFacility) => p.name.includes(searchValue.value));
      this.totalCount = this.facilitiesdta.totalCount
    }
  }

}
