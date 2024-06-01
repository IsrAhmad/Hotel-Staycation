import { IRoomVeiwResponse ,IRoomVeiwData ,IRoomVeiwDataFacility} from './../../models/IRoom.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-veiw-room',
  templateUrl: './veiw-room.component.html',
  styleUrls: ['./veiw-room.component.scss']
})
export class VeiwRoomComponent implements OnInit {
  roomId: string = '';
  roomData:any;
  imgUrl:string='';
  images: string[] = [];
  facilities:string[]=[];
  selectedIndex: number = 0;

  constructor(private _RoomsService: RoomsService, private _ActivatedRoute: ActivatedRoute ) { }
  ngOnInit(): void {
    if (this.roomId !== null) {
      this.roomId = this._ActivatedRoute.snapshot.paramMap.get('id') as string;
      this.getRoomDetalis(this.roomId);
    }
  }

  getRoomDetalis(id: string) {
    this._RoomsService.veiwRoom(id).subscribe({
      next: (res: IRoomVeiwResponse) => {
        this.roomData=res.data;
        this.imgUrl=this.roomData.room.images;
        this.images=this.roomData.room.images;
      }
      , error: (err: HttpErrorResponse) => {

        console.log(err);
      }

    })
  }

}
