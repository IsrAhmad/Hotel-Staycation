import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { IFacilitiesResponse } from 'src/app/Features/Manager/modules/facilities/models/facilities';

interface deleteEvent {
  id:number,
  name:string
}
@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss']
})
export class SharedTableComponent  implements OnInit{
  @Input() tableHeaders: string[] = [];
  @Input() tableDefinitionText: string = '';
  @Input() tableBodyContent!: any ;

  @Output() edit: EventEmitter<number> = new EventEmitter<number>();
  @Output() view: EventEmitter<number> = new EventEmitter<number>();
  @Output() delete: EventEmitter<deleteEvent> = new EventEmitter<deleteEvent>();


  ngOnInit(): void {
    console.log(this.tableBodyContent);
  }


  isFacilities(content: any){
    return content && Array.isArray(content.facilities) && content.facilities.length > 0 ;
  }




  isEdited(rowData: any) {
    this.edit.emit(rowData);
  }

  viewItem(rowId: number) {
    this.view.emit(rowId);
    console.log('shared'+rowId);
  }

  deleteItem(id: number,name :string) {
    this.delete.emit({id,name});
  }
  

}
