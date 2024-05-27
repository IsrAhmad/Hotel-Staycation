import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: AuthComponent, children: [
    {path: '' , redirectTo: 'login' , pathMatch: 'full'},
    { path: 'login',  loadChildren: () => import('../auth/components/login/login.component').then(m => m.LoginComponent)},
    { path: 'register',  loadChildren: () => import('../auth/components/register/register.component').then(m => m.RegisterComponent)},
    { path: 'verify',  loadChildren: () => import('../auth/components/verify/verify.component').then(m => m.VerifyComponent)},
    { path: 'forgot',  loadChildren: () => import('../auth/components/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)},
    { path: 'reset',  loadChildren: () => import('../auth/components/reset-password/reset-password.component').then(m => m.ResetPasswordComponent)}
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
