import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators  ,ReactiveFormsModule} from '@angular/forms';

import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { IRegister } from '../../model/IRegister.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule ,RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registeredUser! :IRegister;
   
    userProfileImg ="http://res.cloudinary.com/dpa4yqvdv/image/upload/v1716937854/users/profile.jpeg";
    userRole="user"
  
    hidePassword:boolean=true;
    hideConfirmPassword:boolean = true;

  
    registerForm:FormGroup=new FormGroup({
      userName : new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/)]) ,// the password contains at least 1 digit, 1 lowercase letter, 1 uppercase letter, 1 special character, and is at least 6 characters long.
      confirmPassword:new FormControl('',[Validators.required,Validators.
        pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/)]),
      phoneNumber: new FormControl('',[Validators.required ,Validators.pattern(/^01[0-2,5]\d{8}$/)]),
      country: new FormControl('',[Validators.required]),
      profileImage:new FormControl(''),
      role:new FormControl(''),
    })
  
    constructor(private _AuthService:AuthService,private _Router:Router,private toastr:ToastrService){}
  
  
    register(userData:FormGroup):void{
     //as we need to send image 
     let newUserData = new FormData();

     newUserData.append('userName', userData.value.userName);
     newUserData.append('email', userData.value.email);
     newUserData.append('country', userData.value.country);
     newUserData.append('phoneNumber', userData.value.phoneNumber);
     newUserData.append('profileImage' ,this.userProfileImg);
     newUserData.append('role' , this.userRole);
     newUserData.append('password', userData.value.password);
     newUserData.append('confirmPassword', userData.value.confirmPassword);
      if(userData.valid){
       
      this._AuthService.register(newUserData).subscribe({
        next:(response)=>{
         console.log(response)
         
        },
        error:(err)=>{
          console.log(err)
        
        },
        complete:()=>{
  
        }
      })
    }
    }
  
  
    
}
