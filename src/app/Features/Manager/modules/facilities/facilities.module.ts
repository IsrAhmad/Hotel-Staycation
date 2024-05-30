import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesComponent } from './facilities.component';
import { SharedModule } from 'src/app/shared/shared.module';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgFor, NgIf} from '@angular/common';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    FacilitiesComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    SharedModule,
    MatTableModule, NgFor, MatButtonModule, NgIf, MatIconModule
  ]
})
export class FacilitiesModule { }
