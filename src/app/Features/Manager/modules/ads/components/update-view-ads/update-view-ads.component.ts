import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-view-ads',
  templateUrl: './update-view-ads.component.html',
  styleUrls: ['./update-view-ads.component.scss']
})
export class UpdateViewAdsComponent {

  selectedValue!:boolean;



  constructor(
    public dialogRef: MatDialogRef<UpdateViewAdsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}
    
    onNoClick(): void {
    this.dialogRef.close();
    }


}
