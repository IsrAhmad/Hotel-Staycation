import { IFacilitiesResponse, IData, IFacility, ICreatedBy } from './models/facilities';
import { Component, OnInit } from '@angular/core';
import { FacilitiesService } from './services/facilities.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
  constructor(private _FacilitiesService: FacilitiesService, private toastr: ToastrService ,private _Router:Router) { }
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
  //nvigate to delete component
  }

  willBeViewed(event: number) {
    //nvigate to view component
  }

}
