import { Component } from '@angular/core';
import { AuthService } from 'src/app/Core/auth/services/auth.service';
import { NavbarService } from '../../services/navbar.service';
import { IUserResponse, IUser } from '../../models/iUser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  currentUser: IUser | undefined;
  defaultImg: string = '../../../../assets/images/default-user.png';
  userName: string = '';
  email: string = '';
  profileImage: string = '';
  _id: string = '';

  constructor(
    private _AuthService: AuthService,
    private _NavbarService: NavbarService
  ) {
    const storedId = localStorage.getItem('id');
    if (storedId !== null) {
      this._id = storedId;
    }
  }

  ngOnInit() {
    this.getUserName();
  }

  getUserName() {
    this._NavbarService.currentUser(this.userName, this.email, this.profileImage, this._id).subscribe({
      next: (res: IUserResponse) => {
        this.currentUser = res.data.user;
        console.log('Full Response:', res);
      },
      error: (err: IUserResponse) => {
        console.error('Error fetching user data:', err);
      },
      complete: () => {
        console.log('User data fetch complete');
      },
    });
  }

  logout() {
    this._AuthService.logout();
  }

}
