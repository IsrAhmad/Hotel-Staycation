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
import { HttpClient } from '@angular/common/http';
import { Observable, map, forkJoin } from 'rxjs';

@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrls: ['./add-edit-room.component.scss']
})
export class AddEditRoomComponent implements OnInit{

  headerName: string = 'Add new room';

  constructor(
    private _RoomsService: RoomsService,
    private _FacilitiesService: FacilitiesService,
    private _ToastrService: ToastrService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute,
  ) {}

  roomRes: IRoomRes = {
    success: false,
    message: '',
    data: {
      room: {
        _id: '',
        roomNumber: '',
        price: 0,
        capacity: 0,
        discount: 0,
        createdAt: '',
        updatedAt: '',
        facilities: [],
        createdBy: { _id: '', userName: '' },
        images: []
      }
    }
  };

  faciliyRes: IFacilitiesResponse = {
    success: false,
    message: '',
    data: {
      totalCount: 0,
      facilities: []
    }
  };

  addEditRoomForm: FormGroup = new FormGroup({
    roomNumber: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    capacity: new FormControl('', [Validators.required]),
    discount: new FormControl('', [Validators.required]),
    facilities: new FormControl([], [Validators.required]),
  });

  roomID: number = 0;
  modePram: string = '';
  viewMode: boolean = false;

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
  };

  files: File[] = [];
  existingImages: File[] = [];
  newFiles: File[] = [];

  ngOnInit(): void {
    this.roomID = this._ActivatedRoute.snapshot.params['id'];
    this.modePram = this._ActivatedRoute.snapshot.params['mode'];
    if (this.roomID) {
      this.getRoomById(this.roomID);
      this.headerName = 'Edit this room';
    }

    if (this.modePram === 'view') {
      this.headerName = 'View this room';
      this.viewMode = true;
      this.addEditRoomForm.disable();
    } else {
      this.getAllFaclities();
    }
  }

  getRoomById(id: number) {
    this._RoomsService.getRoomById(id).subscribe({
      next: (res) => {
        this.roomRes = res;
       
        this.convertUrlsToFiles(this.roomRes.data.room.images);

      },
      error: (err) => { },
      complete: () => {
        this.addEditRoomForm.patchValue({
          roomNumber: this.roomRes.data.room.roomNumber,
          price: this.roomRes.data.room.price,
          capacity: this.roomRes.data.room.capacity,
          discount: this.roomRes.data.room.discount,
          facilities: this.roomRes.data.room.facilities.map(f => f._id),
        });
      },
    });
  }

  async convertUrlsToFiles(urls: string[]) {
    const filePromises = urls.map(url =>
      fetch(url)
        .then(res => res.blob())
        .then(blob => new File([blob], url.substring(url.lastIndexOf('/') + 1)))
    );
    this.existingImages = await Promise.all(filePromises);
    debugger
  }

 getFileNameFromUrl(url: string): string {
    return url.split('/').pop() || '';
  }

  onSelect(event: any) {
    console.log(event);
    this.newFiles.push(...event.addedFiles);
  }

  onRemove(event: any, isExisting: boolean) {
    console.log(event);
    if (isExisting) {
      this.existingImages.splice(this.existingImages.indexOf(event), 1);
    } else {
      this.newFiles.splice(this.newFiles.indexOf(event), 1);
    }
  }

  addEditRoom(): void {
    if (this.addEditRoomForm.valid) {
      let myData = new FormData();

      // Loop through form controls and append their values to FormData
      Object.keys(this.addEditRoomForm.controls).forEach(key => {
        if (key === 'facilities') {
          const selectedFacilities = this.addEditRoomForm.get(key)?.value;
          selectedFacilities.forEach((facilityId: string) => {
            myData.append('facilities', facilityId);
          });
        } else {
          myData.append(key, this.addEditRoomForm.get(key)?.value);
        }
      });
    debugger
      // Append new files directly
      this.existingImages.forEach(file => {
        myData.append('imgs', file, file.name);
      });
      this.newFiles.forEach(file => {
        myData.append('imgs', file, file.name);
      });


    console.log(myData.getAll('imgs'))

      // Send existing images URLs as a JSON array string
     // myData.append('existingImages', JSON.stringify(this.roomRes.data.room.images));

      if (this.roomID) {
        this.editRoomApi(this.roomID, myData);
      } else {
        this.addRoomApi(myData);
      }
    }
  }

  addRoomApi(data: FormData): void {
    this._RoomsService.addRoom(data).subscribe({
      next: (response) => {
        this.roomRes = response;
      },
      error: (err) => {
        console.log(err);
        this._ToastrService.error(err.error.message);
      },
      complete: () => {
        this._ToastrService.success(this.roomRes.message);
        this._Router.navigate(['/manager/rooms']);
      }
    });
  }

  editRoomApi(id: number, data: FormData): void {
    this._RoomsService.editRoom(id, data).subscribe({
      next: (response) => {
        this.roomRes = response;
      },
      error: (err) => {
        console.log(err);
        this._ToastrService.error(err.error.message);
      },
      complete: () => {
        this._ToastrService.success(this.roomRes.message);
        this._Router.navigate(['/manager/rooms']);
      }
    });
  }

  getAllFaclities() {
    this._FacilitiesService.getAllFacilities({ page: 1, size: 100 }).subscribe({
      next: (res) => {
        this.faciliyRes = res;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => { }
    });
  }

  //&&this.files.length>0


}
