import { HttpErrorResponse } from '@angular/common/http';
import { IGetAllUsersRequest, IGetAllUsersResponse, IGetAllUsersData, IUser } from './../../models/users';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  btnText: string = 'Add new admin';
  headerText: string = 'Users Table Details';
  headerPargraph: string = 'You can check all details';
  search!: string;
  pageSize = 10;
  pageIndex = 0;
  totalCount!: number;

  parm: IGetAllUsersRequest = {
    page: this.pageIndex,
    size: this.pageSize
  }

  users: IUser[] = []

  allUsersData: IGetAllUsersData = {
    users: this.users,
    totalCount: 0
  }

  allUsers: IGetAllUsersResponse = {
    success: false,
    message: '',
    data: this.allUsersData
  }

  constructor(private _Router: Router, private _UsersService: UsersService) { }
  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers() {
    this._UsersService.getAllUsers(this.parm).subscribe({
      next: (res: IGetAllUsersResponse) => {
        this.allUsers = res;
        this.allUsersData= res.data;
       // this.users=res.data.users
        //console.log(res);
      }, error: (err: HttpErrorResponse) => {
       // console.log(err);
      }
    })
  }

  //for paginaton
  changePage(e: PageEvent) {
    this.parm.page = e.pageIndex + 1;
    this.parm.size = e.pageSize;
    this.getAllUsers();
  }

  resetSearcgInput() {
    this.search = '';
    this.getAllUsers();
  }

  filtetByUserName(searchValue: HTMLInputElement) {
    if (searchValue) {
      this.allUsersData.users = this.allUsersData.users.filter(p => p.userName.includes(searchValue.value));
      this.totalCount = this.allUsersData.totalCount
    }
  }

  addAdmin() {
    this._Router.navigate(['/manager/users/addAdmin']);
  }

  veiwItem(id:string){
    //redirect to  veiw user component

    this._Router.navigate(['/manager/profile',id,'viewUser']);


  }


}
