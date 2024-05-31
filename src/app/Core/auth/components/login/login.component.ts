import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ILogIn } from '../../model/ILogin';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

 userLogged:ILogIn={
  message:'',
  success:false,
  data:{
    token: '',
    user: {
      _id:'',
      userName:'',
      role:''
    }
  }
 }

  hide:boolean=true;

  loginForm:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/)]) // the password contains at least 1 digit, 1 lowercase letter, 1 uppercase letter, 1 special character, and is at least 6 characters long.
  })

  constructor(private _AuthService:AuthService,private _Router:Router,private toastr:ToastrService){}


  login(data:FormGroup):void{

    if(data.valid ==true){

    this._AuthService.login(data.value).subscribe({
      next:(response)=>{
      this.userLogged=response

      },
      error:(err)=>{

        this.showError(err.error.message)
      },
      complete:()=>{


        localStorage.setItem('token',this.userLogged.data.token)
        localStorage.setItem('role',this.userLogged.data.user.role)
        localStorage.setItem('id',this.userLogged.data.user._id)

        this._Router.navigate(['/guest/home'])

      }
    })
  }
  }
  showError(mes:string) {
    this.toastr.error( mes);
  }


}
