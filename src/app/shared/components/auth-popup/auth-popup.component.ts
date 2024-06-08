import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth-popup',
  templateUrl: './auth-popup.component.html',
  styleUrls: ['./auth-popup.component.scss']
})
export class AuthPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<AuthPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr:ToastrService,
    ) {}

    onNoClick(): void {
    this.dialogRef.close();
    }

}
