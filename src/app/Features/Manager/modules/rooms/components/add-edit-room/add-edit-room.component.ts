import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { RoomsService } from '../../services/rooms.service';
import { IRoomRes } from '../../models/IRoom.model';
import { FacilitiesService } from '../../../facilities/services/facilities.service';
import { IFacilitiesResponse } from '../../../facilities/models/facilities';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrls: ['./add-edit-room.component.scss']
})
export class AddEditRoomComponent implements OnInit{

  headerName:string='Add new room'

  constructor(private _RoomsService:RoomsService,private _FacilitiesService:FacilitiesService,
    private _ToastrService:ToastrService,
    private _Router:Router,
    private _ActivatedRoute: ActivatedRoute,
  ){}

  roomRes:IRoomRes={
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

roomID:number=0;
modePram:string=''
viewMode:boolean=false;

sliderOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 2
    },
    940: {
      items: 3
    }
  },
  nav: false
}

ngOnInit(): void {
  this.roomID = this._ActivatedRoute.snapshot.params['id'];
  this.modePram = this._ActivatedRoute.snapshot.params['mode'];
  if(this.roomID){
    this.getRoomById(this.roomID)
  }
  if (this.modePram == 'view') {
    this.headerName='View this room'
    this.viewMode=true
    this.addEditRoomForm.disable();
    
  }else{

  
  this.getAllFaclities()
  }
}

getRoomById(id: number) {
  this._RoomsService.getRoomById(id).subscribe({
    next: (res) => {
      this.roomRes = res
      console.log(this.roomRes.data.room.images);
    },
    error(err) { },
    complete: () => {
      this.addEditRoomForm.patchValue({
        roomNumber: this.roomRes.data.room.roomNumber,
        price: this.roomRes.data.room.price,
        capacity: this.roomRes.data.room.capacity,
        discount: this.roomRes.data.room.discount,
        facilities: this.roomRes.data.room.facilities.map(f => f._id),  // Map to facility IDs

      })

    },
  })
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
      this.roomRes=response
      
    },error:(err)=>{
      console.log(err)
      this._ToastrService.error(err.error.message)

    },complete:()=>{

      this._ToastrService.success(this.roomRes.message)
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
