import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  {path:'addAdmin' , component:AddAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
