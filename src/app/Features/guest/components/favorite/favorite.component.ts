import { IAllFavRes ,IAllFavResData ,IRoom ,IFavoriteRoom ,IUser} from './models/IFavorite';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteService } from './services/favorite.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';

export interface Root {
  success: boolean
  message: string
  data: Data
}

export interface Data {
  favoriteRooms: FavoriteRoom[]
  totalCount: number
}

export interface FavoriteRoom {
  _id: string
  rooms: Room[]
  user: User
  createdAt: string
  updatedAt: string
}

export interface Room {
  _id: string
  roomNumber: string
  price: number
  capacity: number
  discount: number
  facilities: string[]
  createdBy: string
  images: string[]
  createdAt: string
  updatedAt: string
}

export interface User {
  _id: string
  userName: string
}
@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule ,SharedModule],
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
  favourites:any


  lang: string = localStorage.getItem('lang') !== null ? localStorage.getItem('lang')! : 'en';
  loginToFav: any = localStorage.getItem('role');
  constructor(private _Router:Router,private translate:TranslateService , 
    private _ToastrService:ToastrService, private _FavoriteService:FavoriteService){}

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      // do something
      console.log(event)
      this.lang=event.lang
    });
    this.GetAllFav();
    
  }

  GetAllFav(){
    this._FavoriteService.getAllFavRooms().subscribe({
      next:(res)=>{
        console.log(res);
        this.favList=res.data;
        console.log(this.favList);
        this.favourites= res.data.favoriteRooms ;
        console.log(this.favourites);
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
