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
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DeleteComponent } from './components/delete/delete.component';

import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    SharedComponent,
    SharedTableComponent,
    SharedHeaderComponent,
   
    SidebarComponent,
    DeleteComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    RouterModule,
    MatPaginatorModule
    
   
  ],
  exports:[MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    SharedHeaderComponent,
    SharedTableComponent,
     RouterModule ,
     SidebarComponent,
     MatPaginatorModule
  

  ]
})
export class SharedModule { }
