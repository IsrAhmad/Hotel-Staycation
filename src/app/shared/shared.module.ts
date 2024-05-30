import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import {MatTableModule} from '@angular/material/table';
import { SharedTableComponent } from './components/shared-table/shared-table.component';
import { SharedHeaderComponent } from './components/shared-header/shared-header.component';


@NgModule({
  declarations: [
    SharedComponent,
    SharedTableComponent,
    SharedHeaderComponent,
   
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule
   
  ],
  exports:[MatMenuModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    SharedHeaderComponent,
    SharedTableComponent
  

  ]
})
export class SharedModule { }
