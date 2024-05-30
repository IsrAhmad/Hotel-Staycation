import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/auth/services/auth.service';
import { NavbarService } from '../../services/navbar.service';
// import { IApiResponse, IUser } from '../../models/iUser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  imagePath: string = '';
  imgSrc: string = '../../../../assets/images/profile-user.png';
  // imgUrl: string = 'https://upskilling-egypt.com:3000/';
  // imgUrl: string = 'https://154.41.228.234:3000/';
  // emptyImg: string = '../../../../assets/images/profile-user.png';

  userName: string = '';
  name: string = '';
  listData: any;
  currentUser: any | undefined;

  constructor(
    private _AuthService:AuthService,
    private _Router: Router,
    private _NavbarService: NavbarService
  ) { }

  ngOnInit() {
    this.getUserName();
    // this.getCurrentUsersData();
  }

  getUserName() {
    this._NavbarService.currentUser().subscribe({
      next: (res: any) => {
        console.log('Full Response:', res); // Log the entire response

        // if (res && res.data && res.data.users) {
        //   this.currentUser = res.data.users;
        //   console.log('User:', this.currentUser); // Log the currentUser object
        // } else {
        //   console.error('User data is undefined:', res);
        // }
      },
      error: (err: any) => {
        console.error('Error fetching user data:', err); // Log the error if any
      },
      complete: () => {
        console.log('User data fetch complete'); // Log when the request is complete
      },
    });
  }

  logout() {
    this._AuthService.logout();
  }

}
