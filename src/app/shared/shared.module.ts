import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DeleteComponent } from './components/delete/delete.component';



@NgModule({
  declarations: [
    SharedComponent,
    SidebarComponent,
    DeleteComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule
  ],
  exports:[SidebarComponent]
})
export class SharedModule { }
