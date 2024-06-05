import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoomsService } from '../../../rooms/services/rooms.service';
import { IRoom } from '../../../rooms/models/IRoom.model';

@Component({
  selector: 'app-add-ads-popup',
  templateUrl: './add-ads-popup.component.html',
  styleUrls: ['./add-ads-popup.component.scss']
})
export class AddAdsPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<AddAdsPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}


    
    onNoClick(): void {
    this.dialogRef.close();
    }

  
}
