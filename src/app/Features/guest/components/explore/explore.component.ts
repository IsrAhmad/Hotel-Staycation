import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GuestService } from '../../services/guest.service';
import { IParams, IRoomResponse } from 'src/app/Features/Manager/modules/rooms/models/IRoom.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { IFavoriteResponse } from '../favorite/models/IFavorite';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule ,SharedModule],
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent  implements OnInit{
  lang: string = localStorage.getItem('lang') !== null ? localStorage.getItem('lang')! : 'en';
  roomsRes:IRoomResponse={
    success:false,
    message:'',
    data:{
      totalCount:0,
      rooms:[]
    }
  
  }
  fav!: IFavoriteResponse ;
  loginToFav: any = localStorage.getItem('role');
  totalCount!:number;
  page = 0;
  size = 10;
 
  params:IParams= {
    page :this.page,
    size:this.size

  }
  constructor(private translate:TranslateService ,
    private _GuestService:GuestService,
    private _ToastrService: ToastrService , private _router: Router){

  }
 


  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      // do something
      console.log(event)
      this.lang=event.lang
    });
    this.getAllRoomForExplore();
  }

  getAllRoomForExplore() {
    this._GuestService.getAllRoomsForExplore(this.params).subscribe({
      next: (res) => {
       
        this.roomsRes = res;
        console.log(this.roomsRes);
        this.totalCount = res.data.totalCount;
        console.log(this.totalCount)

      },
      error: (err) => {
        console.log(err)


      }
    })
  }
  goLogin():void{

    this._ToastrService.error('First login')
  
    this._router.navigate(['/auth'])
  
  }
  saveRoomInFav(roomId: string) {
    this._GuestService.saveFavRoom(roomId).subscribe({
      next: (res) => {
        this.fav = res;
        console.log(this.fav)
      },
      error: (err) => {
        console.log(err)
        this._ToastrService.error(err.error.message)
  
        
      },
      complete: () => {
        this._ToastrService.success(this.fav.message)
  
      }
    })
  }
     //for paginaton 
     changePage(e: PageEvent) {
      this.params.page = e.pageIndex + 1;
      this.params.size = e.pageSize;
      this.getAllRoomForExplore();
    }
}
