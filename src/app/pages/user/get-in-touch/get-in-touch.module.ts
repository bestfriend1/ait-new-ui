import { MaterialModule } from './../../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetInTouchRoutingModule } from './get-in-touch-routing.module';
import { GetInTouchComponent } from './get-in-touch.component';


@NgModule({
  declarations: [
    GetInTouchComponent
  ],
  imports: [
    CommonModule,
    GetInTouchRoutingModule,
    MaterialModule
  ]
})
export class GetInTouchModule { }
