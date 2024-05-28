import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: 'auth',
    loadChildren: () =>
      import('./Core/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'guest',
    loadChildren: () =>
      import('./Features/guest/guest.module').then((m) => m.GuestModule),
  },
  {
    path: 'manager',
    loadChildren: () =>
      import('./Features/Manager/manager.module').then((m) => m.ManagerModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
