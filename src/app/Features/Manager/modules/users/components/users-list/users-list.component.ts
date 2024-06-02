import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  btnText:string='Add New User';
  headerText:string='Users Table Details';
  headerPargraph:string='You can check all details';
  constructor(private _Router :Router){}


  addAdmin(){
    this._Router.navigate(['/manager/users/addAdmin']);
  }



}
