import { Component, OnInit } from '@angular/core';
import { RoomsService } from './services/rooms.service';
import { IRoom, IRoomData } from './models/IRoom.model';

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
  constructor(private _RoomsService:RoomsService){}
  ngOnInit(): void {
     this.getAllRooms();
  }


  ////
  getAllRooms(){
    let params= {
      page :1 ,
      size:10

    }
    this._RoomsService.getAllRooms(params).subscribe({
     next:(res )=>{
      console.log(res);
      this.roomData= res.data.rooms
      console.log(this.roomData);

     }      
    })
  }
}
