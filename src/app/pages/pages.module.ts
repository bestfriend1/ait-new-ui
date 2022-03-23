import { FooterModule } from './../shared/components/footer/footer.module';
import { HeaderModule } from './../core/header/header.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    HeaderModule,
    FooterModule
  ]
})
export class PagesModule { }
