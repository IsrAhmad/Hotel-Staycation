import { Component ,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-view-ads',
  templateUrl: './add-edit-view-ads.component.html',
  styleUrls: ['./add-edit-view-ads.component.scss']
})
export class AddEditViewAdsComponent {
  headerName:string = 'ADS';
  selectedValue!:boolean;
  addEditAdsForm:FormGroup = new FormGroup({
    room:new FormControl('' ,Validators.required),
    price:new FormControl('' ,Validators.required),
    isActive:new FormControl('' ,Validators.required),
  });
  constructor(
    public dialogRef: MatDialogRef<AddEditViewAdsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
