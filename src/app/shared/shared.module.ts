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
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


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
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule ,
    MatInputModule,
    MatSelectModule
   
  ],
  exports:[MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    SharedHeaderComponent,
    SharedTableComponent,
     RouterModule ,
     SidebarComponent,
     MatPaginatorModule,
     MatFormFieldModule,
  FormsModule,
  MatInputModule,
  MatSelectModule

  ]
})
export class SharedModule { }
