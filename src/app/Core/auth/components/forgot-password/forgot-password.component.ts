import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  constructor(private _FormBuilder:FormBuilder,private _AuthService:AuthService){}
  fogetForm:FormGroup = this._FormBuilder.group({
    email:['',[Validators.email,Validators.required]]
  })
  
  handleForget(){
    this._AuthService.forgetPass(this.fogetForm.value).subscribe({
      next:res=>{
        console.log(res);
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
}
