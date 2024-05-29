import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { IResetRequest, IResetResponse } from '../../model/reset-password';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, RouterLink],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  ResetPass: IResetRequest = {
    email: '',
    password: '',
    confirmPassword: '',
    seed: ''
  }
  response:IResetResponse={
    success: false,
    message: '',
    data: ''
  }
  hide: boolean = true;
  resetPassForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/)]),
    confirmPassword: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/)]),// the password contains at least 1 digit, 1 lowercase letter, 1 uppercase letter, 1 special character, and is at least 6 characters long.
    seed: new FormControl(null, [Validators.required ])
  })

  constructor(private _AuthService: AuthService, private _Router: Router, private toastr: ToastrService) { }

  onResetPass(resetPassForm:FormGroup){
    this._AuthService.resetPassword(resetPassForm.value).subscribe({
      next:(res:IResetResponse)=>{
        console.log(res);
        this.response=res;

      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        this.showError(err.message);
      },complete:()=>{
        this.showSuccess(this.response.message);
        this._Router.navigate(['/auth/login']);
      }
    })
  }

  showSuccess(res:string) {
    this.toastr.success(res);
  }

  showError(err:string) {
    this.toastr.error(err);
  }

}
