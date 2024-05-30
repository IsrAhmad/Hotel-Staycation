import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  constructor (public _DialogRef:DialogRef,@Inject(DIALOG_DATA) public data: {comp:string,id:number,name:string}){}
}
