import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/auth/services/auth.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  constructor(private _Router:Router, private _AuthService: AuthService) { }

  OnInit() {
    this._AuthService.getRole();
  }

  isAdmin(): boolean {
    return this._AuthService.role === 'admin';
  }

  goHome() {
    this.isAdmin() ? this._Router.navigate(['/manager/home']) : this._Router.navigate(['/guest/home']);
  }

}
