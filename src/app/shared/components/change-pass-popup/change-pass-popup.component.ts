import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlOptions } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Core/auth/services/auth.service';

@Component({
  selector: 'app-change-pass-popup',
  templateUrl: './change-pass-popup.component.html',
  styleUrls: ['./change-pass-popup.component.scss']
})
export class ChangePassPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<ChangePassPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr:ToastrService,
    private _AuthService:AuthService
    ) {}
    
    onNoClick(): void {
    this.dialogRef.close();
    }



  msg:string='';
  hide:boolean=true;
  hideNew:boolean=true;
  hideConfirmPass:boolean=true;

  changePassForm:FormGroup=new FormGroup({
    oldPassword:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/)]) ,
    newPassword:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/)]) ,
    confirmPassword:new FormControl('',[RxwebValidators.compare({fieldName:'newPassword'}),Validators.required]),

  })



  changePassword(data:FormGroup):void{

    if(data.valid ==true){
      console.log(data.value)
    this._AuthService.changePassword(data.value).subscribe({
      next:(response)=>{

       if(response){

        this.msg=response.message
      }
      },
      error:(err)=>{

        this.msg=err.error.message;
        this.showError(this.msg)

      },
      complete:()=>{
        this.onNoClick()
        this.showSuccess(this.msg)

      }
    })
  }
  }

  showSuccess(mes:string) {
    this.toastr.success( mes);
  }
  showError(mes:string) {
    this.toastr.error( mes);
  }



}
