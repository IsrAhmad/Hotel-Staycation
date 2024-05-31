import { Component, OnInit } from '@angular/core';
import { RoomsService } from './services/rooms.service';
import { IRoom, IRoomData } from './models/IRoom.model';
import { PageEvent } from '@angular/material/paginator';

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

 
  displayedColumns: string[] = ['Room number','Images' ,'Discount' 
  ,'Capacity', 'Created at' ,'Created by' , 'Actions'];

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
  constructor(private _RoomsService:RoomsService){}

  ngOnInit(): void {
     this.getAllRooms();
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
}
