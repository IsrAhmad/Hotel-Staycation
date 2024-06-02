import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Core/auth/services/auth.service';
import { IUserResponse } from '../../models/iUser';

@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.scss']
})
export class ViewUserProfileComponent implements OnInit{

  userId:string=''
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

  constructor(private _AuthService:AuthService,    private _ActivatedRoute: ActivatedRoute  ){}

  ngOnInit(): void {
    this.userId = this._ActivatedRoute.snapshot.params['id'];
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


}
