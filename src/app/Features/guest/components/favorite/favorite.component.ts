import { IAllFavRes ,IAllFavResData ,IRoom ,IFavoriteRoom ,IUser} from './models/IFavorite';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteService } from './services/favorite.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule ,SharedModule],
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit{
  pageSize = 10;
  pageIndex = 0;
  totalCount!:number;
  room:IRoom[]= [];
  user:IUser= {
    _id: '',
    userName: ''
  }
  favRoom:IFavoriteRoom[]=[];
  imags: string[]=[];
  facilitis: string[]=[];
  data:IAllFavResData={
    favoriteRooms: this.favRoom,
    totalCount: 0
  }
  favList:IAllFavRes={
    success: false,
    message: '',
    data: this.data
  }

 
  constructor(private _Router:Router, private _ToastrService:ToastrService, private _FavoriteService:FavoriteService){}

  ngOnInit(): void {
    this.onGetAllFav();
    
  }

  onGetAllFav(){
    this._FavoriteService.getAllFavRooms().subscribe({
      next:(res)=>{
        console.log(res);
        this.favList=res;
        this.totalCount=res.data.favoriteRooms[0].rooms.length;
        console.log(this.totalCount)
      },error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }


  goLogin():void{
    this._ToastrService.error('First login')
    this._Router.navigate(['/auth'])
  
  }

  back(){
    this._Router.navigate(['../'])

  }


      // for paginaton 
      changePage(e: PageEvent) {
        this.pageIndex = e.pageIndex + 1;
        this.pageSize = e.pageSize;
        this.onGetAllFav();
      }
}
