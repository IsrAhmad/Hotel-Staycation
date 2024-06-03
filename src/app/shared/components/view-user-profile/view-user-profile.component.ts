import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Core/auth/services/auth.service';
import { IUserResponse } from '../../models/iUser';

@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.scss']
})
export class ViewUserProfileComponent implements OnInit{

  userId:string=''
  viewUser:string=''
  isViewUser:boolean=false


  userDataRes:IUserResponse={
    success:false,
    message:'',
    data:{
       user:{
        _id:'',
  userName: '',
  email: '',
  phoneNumber: 0,
  country: '',
  role: '',
  profileImage: '',
  verified: false,
  createdAt: '',
  updatedAt: '',
       }
    }
  }

  constructor(private _AuthService:AuthService,    private _ActivatedRoute: ActivatedRoute ,private _Router:Router ){}


  ngOnInit(): void {
    this.userId = this._ActivatedRoute.snapshot.params['id'];
    this.viewUser = this._ActivatedRoute.snapshot.params['viewUser'];
    if(this.viewUser){
      //from users page
      this.isViewUser=true
    }

    this.getCurrentUser()

    
  }

  getCurrentUser():void{

    this._AuthService.getUserProfile(this.userId).subscribe({
      next: (res) => {
        this.userDataRes = res
      },
      error(err) { },
      complete: () => {
    
  
      },
    })


  }

  goToHomeOrUsers():void{

    if(this.viewUser){
      //from users page
      this._Router.navigate(['/manager/users'])
    }else{
      this.navigateToAdminOrUser()
    }

  }

  navigateToAdminOrUser():void{

    if(localStorage.getItem('role')=='admin'){
      this._Router.navigate(['/manager/home'])
    }else{
      this._Router.navigate(['/guest/home'])


    }

  }


}
