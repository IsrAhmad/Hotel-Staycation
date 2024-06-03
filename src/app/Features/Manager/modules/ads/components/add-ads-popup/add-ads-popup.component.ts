import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
