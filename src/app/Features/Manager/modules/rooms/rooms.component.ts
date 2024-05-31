import { Component, OnInit } from '@angular/core';
import { RoomsService } from './services/rooms.service';
import { IRoom, IRoomData } from './models/IRoom.model';
import { PageEvent } from '@angular/material/paginator';
import { FacilitiesService } from '../facilities/services/facilities.service';
import { IFacility } from '../facilities/models/facilities';

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
 
  displayedColumns: string[] = ['Room number','Images' ,'Discount' 
  ,'Capacity', 'Created at' ,'Facilities' , 'Actions'];

  roomData:IRoom[]=[]
 search!:string;
  pageSize = 10;
  pageIndex = 0;
  totalCount!:number;
   ////
   params= {
    page :this.pageIndex,
    size:this.pageSize

  }
  constructor(private _RoomsService:RoomsService ,private _FacilitiesService:FacilitiesService){}

  ngOnInit(): void {
     this.getAllRooms();
     this.getAllFacilites();
  }
  

 
  getAllRooms(){
  
    this._RoomsService.getAllRooms(this.params).subscribe({
     next:(res )=>{
   
      this.roomData= res.data.rooms;
      this.totalCount =res.data.totalCount
      
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
      this.roomData = this.roomData.filter(p => p.roomNumber === searchValue.value);
      this.totalCount =this.roomData.length
    }
  }
  getAllFacilites(){
    let params ={
      page:1 ,
      size:1000
    }
   this._RoomsService.getAllFacilities(params).subscribe({
    next:(res)=>{
  this.listOfFacilities = res.data.facilities;
  console.log(this.listOfFacilities);
  console.log(res.data.totalCount)
    }
   })
  }
  filterByFacilityName(facility:string){
  // this.roomData = this.roomData.filter(facility => facility.facilities === facility)
  }

}
