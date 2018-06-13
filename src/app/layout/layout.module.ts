import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LayoutRoutingModule }  from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {SideComponent } from './components/side/side.component';
import { HeadComponent } from './components/head/head.component';


@NgModule({
  imports:[
    CommonModule,
    LayoutRoutingModule,
  ],
  declarations:[
    LayoutComponent,
    SideComponent, 
    HeadComponent
  ],
  providers: [  ]
})

export class LayoutModule {}
