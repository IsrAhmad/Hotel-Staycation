import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { RoomsService } from '../../services/rooms.service';
import { IRoomRes } from '../../models/IRoom.model';
import { FacilitiesService } from '../../../facilities/services/facilities.service';
import { IFacilitiesResponse } from '../../../facilities/models/facilities';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrls: ['./add-edit-room.component.scss']
})
export class AddEditRoomComponent implements OnInit{

  constructor(private _RoomsService:RoomsService,private _FacilitiesService:FacilitiesService,
    private _ToastrService:ToastrService,
    private _Router:Router
  ){}

  roomAddedRes:IRoomRes={
    success:false,
    message:'',
    data:{
      room:{
        _id: '',
        roomNumber: '',
        price: 0,
        capacity: 0,
        discount: 0,
        createdAt: '',
        updatedAt: '',
        facilities: [],
        createdBy: {_id:'',userName:""},
        images: []
      }
    }
  }

  faciliyRes:IFacilitiesResponse={
    success:false,
    message:'',
    data:{
      totalCount:0,
      facilities:[]
    }
  }


  addEditRoomForm:FormGroup=new FormGroup({
    roomNumber : new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    capacity:new FormControl('',[Validators.required]) ,
    discount:new FormControl('',[Validators.required]),
    facilities: new FormControl([],[Validators.required]),
    //img req
  },
)

ngOnInit(): void {
  this.getAllFaclities()
}
files: File[] = [];

onSelect(event:any) {
  console.log(event);
  this.files.push(...event.addedFiles);
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}


addEditRoom():void{

  if(this.addEditRoomForm.valid&&this.files.length>0){
    console.log(this.files)
    let myData=new FormData();

    // Loop through form controls and append their values to FormData
    Object.keys(this.addEditRoomForm.controls).forEach(key => {
      // Check if it's the facilityIds form control
      if (key === 'facilities') {
        const selectedFacilities = this.addEditRoomForm.get(key)?.value;
        selectedFacilities.forEach((facilityId: string) => {
          myData.append('facilities', facilityId);
        });
      } else {
        // Append other form controls' values to FormData
        myData.append(key, this.addEditRoomForm.get(key)?.value);
      }
    });

    this.files.forEach(file => {
      myData.append('imgs', file, file.name);
    });

    console.log(myData.getAll('imgs'))
    console.log(myData.getAll('facilities'))
    console.log(myData.getAll('roomNumber'))


    this.addRoomApi(myData);
  }

   


  




}

addRoomApi(data:FormData):void{

  this._RoomsService.addRoom(data).subscribe({
    next:(response)=>{
      this.roomAddedRes=response
      
    },error:(err)=>{
      console.log(err)
      this._ToastrService.error(err.error.message)

    },complete:()=>{

      this._ToastrService.success(this.roomAddedRes.message)
      this._Router.navigate(['/manager/rooms'])
    }
  })
}

getAllFaclities() {
  this._FacilitiesService.getAllFacilities({page:1,size:100}).subscribe({
    next: (res) => {
      console.log(res);
      this.faciliyRes = res;
    }, error: (err) => {
      console.log(err)

    }, complete: () => {

    }
  })
}

}
