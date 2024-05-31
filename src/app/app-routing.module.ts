import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

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
  {path: '**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
