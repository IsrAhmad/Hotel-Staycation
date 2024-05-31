import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { IFacilitiesResponse } from 'src/app/Features/Manager/modules/facilities/models/facilities';

interface deleteEvent {
  id:string,
  name:string
}
interface EditOrViewEvent {
  id: string;
  name: string;
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

  // @Output() edit: EventEmitter<number> = new EventEmitter<number>();
  // @Output() view: EventEmitter<number> = new EventEmitter<number>();
  @Output() delete: EventEmitter<deleteEvent> = new EventEmitter<deleteEvent>();
  @Output() edit: EventEmitter<EditOrViewEvent> = new EventEmitter<EditOrViewEvent>();
  @Output() view: EventEmitter<EditOrViewEvent> = new EventEmitter<EditOrViewEvent>();
  // @Output() delete: EventEmitter<number> = new EventEmitter<number>();


  ngOnInit(): void {
    console.log(this.tableBodyContent);
  }


  isFacilities(content: any){
    return content && Array.isArray(content.facilities) && content.facilities.length > 0 ;
  }




  isEdited(id: string,name:string) {
    this.edit.emit({id,name});
  }

  viewItem(id: string,name:string) {
    this.view.emit({id,name});
  }

  deleteItem(id: string,name :string) {
    this.delete.emit({id,name});
  }


}
