import { Component, OnInit } from '@angular/core';
import { RoomsService } from './services/rooms.service';
import { IParams, IRoom, IRoomData } from './models/IRoom.model';
import { PageEvent } from '@angular/material/paginator';
import { FacilitiesService } from '../facilities/services/facilities.service';
import { IFacility } from '../facilities/models/facilities';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent  implements OnInit{
 
  //for header
  btnText :string = 'Add new room' ;
  headerText:string ='Rooms Table Details' ;
  headerPargraph:string ='You can check all details';
  addRoomLink:string =''
  facilityChanaged:string ='';
  //
  listOfFacilities :any;

  displayedColumns: string[] = ['Room number','Images'  
  ,'Capacity','Discount', 'Price' ,'Facilities' , 'Actions'];

  roomData:IRoom[]=[]
 search!:string;
  pageSize = 10;
  pageIndex = 0;
  totalCount!:number;
 
   ////
   params:IParams= {
    page :this.pageIndex,
    size:this.pageSize

  }

  sortedRooms:IRoom[] =[];

  constructor(private _RoomsService:RoomsService,private _Router:Router){}

  ngOnInit(): void {
    this.getAllRooms();
   
    
   
   
  }
  sortData(sort: Sort) {
    const data = this.roomData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedRooms = data;
      return;
    }
    this.sortedRooms = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'price':
          return this.compare(a.price, b.price, isAsc);
        case 'capacity':
          return this.compare(a.capacity, b.capacity, isAsc);
        case 'discount':
          return this.compare(a.discount, b.discount, isAsc);
        default:
          return 0;
      }
    });
  }
   compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }


 
  getAllRooms(){
  
    this._RoomsService.getAllRooms(this.params).subscribe({
     next:(res )=>{
   
      this.roomData= res.data.rooms;
      this.sortedRooms= this.roomData.slice();
      console.log(this.sortedRooms);
      this.totalCount =res.data.totalCount;
    

      
//handel toaster
     }  ,
     error:(err)=>{
       
     },
     complete:()=>{

     }    
    })

  }
     //for paginaton 
  changePage(e: PageEvent) {
    this.params.page = e.pageIndex + 1;
    this.params.size = e.pageSize;
    this.getAllRooms();
  }

  resetSearcgInput() {
    this. search= '';
    this.getAllRooms();
  }
  filtetByRoomNumber(searchValue :HTMLInputElement){
    if (searchValue) {
      this.sortedRooms = this.sortedRooms.filter(p => p.roomNumber === searchValue.value);
      this.totalCount =this.sortedRooms.length
    }
  }


  addRoom():void{
    this._Router.navigate(['/manager/rooms/addRoom']);

  }
}
