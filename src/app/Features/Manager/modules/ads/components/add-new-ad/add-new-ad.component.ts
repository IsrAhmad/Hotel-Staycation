import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEditViewAdsComponent } from '../add-edit-view-ads/add-edit-view-ads.component';

@Component({
  selector: 'app-add-new-ad',
  templateUrl: './add-new-ad.component.html',
  styleUrls: ['./add-new-ad.component.scss']
})
export class AddNewAdComponent {
  headerName:string = "Add New Ads Item"
  constructor(
    public dialogRef: MatDialogRef<AddEditViewAdsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
