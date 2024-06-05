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
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import {MatPaginatorModule} from '@angular/material/paginator';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { NoDataComponent } from './components/no-data/no-data.component';
import {MatListModule} from '@angular/material/list';
import {MatSortModule} from '@angular/material/sort';
import { ViewUserProfileComponent } from './components/view-user-profile/view-user-profile.component';
import { MatCardModule } from '@angular/material/card';
import { ChangePassPopupComponent } from './components/change-pass-popup/change-pass-popup.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    SharedComponent,
    SharedTableComponent,
    SharedHeaderComponent,

    SidebarComponent,
    DeleteComponent,
    NavbarComponent,
    NoDataComponent,
    ViewUserProfileComponent,
    ChangePassPopupComponent,

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
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
   ReactiveFormsModule,

    MatListModule,
    MatSortModule,
    MatCardModule,
    MatAutocompleteModule,
    TranslateModule,



  ],
  exports:[
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    SharedHeaderComponent,
    SharedTableComponent,
     RouterModule ,
     SidebarComponent,
     MatDialogModule,
     MatPaginatorModule,
     NavbarComponent,
     SidebarComponent,
     MatPaginatorModule,
     MatFormFieldModule,
  FormsModule,
  MatInputModule,
  MatSelectModule,
  NoDataComponent,
  ReactiveFormsModule,
     MatListModule,
     SidebarComponent,
     MatPaginatorModule,
     MatFormFieldModule,
      FormsModule,
      MatInputModule,
      MatSelectModule,
      NoDataComponent ,
      MatSortModule,
      MatAutocompleteModule,
      TranslateModule,


  ]
})
export class SharedModule { }
