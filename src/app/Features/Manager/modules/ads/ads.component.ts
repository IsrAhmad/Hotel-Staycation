import { Component, OnInit } from '@angular/core';
import { AdsService } from './services/ads.service';
import { ToastrService } from 'ngx-toastr';
import { IParams } from '../rooms/models/IRoom.model';
import { Ad, IAdsResponse } from './models/IAdsResponse';
import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit{


  //for header
  btnText :string = 'Add new ads' ;
  headerText:string ='Ads Table Details' ;
  headerPargraph:string ='You can check all details';
  
  //
  listOfFacilities :any;

  displayedColumns: string[] = ['Room number', 'Price','Discount', 'Capacity', 'Is active' ,'Created by' , 'Actions'];

  AdsDataRes:IAdsResponse={
    success:false,
    message:'',
    data:{
      totalCount:0,
      ads:[]
    }
  }
  
 search!:string;
  pageSize = 10;
  pageIndex = 0;
  totalCount!:number;
 
   params:IParams= {
    page :this.pageIndex,
    size:this.pageSize

  }

  sortedAds:Ad[] =[];

  constructor(private _AdsService:AdsService ,private toastr: ToastrService){}

  ngOnInit(): void {
    this.getAllAds();
  
   
  }

  
  sortData(sort: Sort) {
    const data = this.AdsDataRes.data.ads.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedAds = data;
      return;
    }
    this.sortedAds = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'discount':
          return this.compare(a.room.discount, b.room.discount, isAsc);
          case 'price':
            return this.compare(a.room.price, b.room.price, isAsc);
          case 'capacity':
            return this.compare(a.room.capacity, b.room.capacity, isAsc);
  
        default:
          return 0;
      }
    });
  }
   compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }


 
  getAllAds(){
  
    this._AdsService.getAllAds(this.params).subscribe({
     next:(res )=>{
   
      this.AdsDataRes= res;


     }  ,
     error:(err)=>{

      this.toastr.error(err.error.message)
       
     },
     complete:()=>{

      this.sortedAds= this.AdsDataRes.data.ads.slice();
      console.log(this.sortedAds);
      this.totalCount =this.AdsDataRes.data.totalCount;
          
     }    
    })

  }
     //for paginaton 
  changePage(e: PageEvent) {
    this.params.page = e.pageIndex + 1;
    this.params.size = e.pageSize;
    this.getAllAds();
  }

  resetSearcgInput() {
    this. search= '';
    this.getAllAds();
  }
  filtetByRoomNumber(searchValue :HTMLInputElement){
    if (searchValue) {
      this.sortedAds = this.sortedAds.filter(p => p.room.roomNumber.includes(searchValue.value));
      this.totalCount =this.sortedAds.length
    }
  }






}
