import { IAllFavRes ,IAllFavResData ,IRoom ,IFavoriteRoom} from './models/IFavorite';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteService } from './services/favorite.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit{
  // favRoom:IFavoriteRoom= {
  //   _id: '',
  //   rooms: this.room[],
  //   user: this.user,
  //   createdAt: '',
  //   updatedAt: ''
  // }
  
  // room:IRoom= {
  //   _id: '',
  //   roomNumber: '',
  //   price: 0,
  //   capacity: 0,
  //   discount: 0,
  //   facilities: string[],
  //   createdBy: '',
  //   images: string[]
  //   createdAt: '',
  //   updatedAt: ''
  // }
  
  // user:IUser= {
  //   _id: '',
  //   userName: ''
  // }
  
  // data:IAllFavResData={
  //   favoriteRooms: IFavoriteRoom[],
  //   totalCount: 0

  // }
  // favLis:IAllFavRes={
  //   success: false,
  //   message: '',
  //   data: this.data

  // }
  favList:any;
  constructor(private _Router:Router, private _ToastrService:ToastrService, private _FavoriteService:FavoriteService){}

  ngOnInit(): void {
    this.onGetAllFav();
    
  }

  onGetAllFav(){
    this._FavoriteService.getAllFavRooms().subscribe({
      next:(res)=>{
        console.log(res);
        this.favList=res;
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

      //for paginaton 
      // changePage(e: PageEvent) {
      //   this.params.page = e.pageIndex + 1;
      //   this.params.size = e.pageSize;
      //   this.getAllRooms();
      // }
}
