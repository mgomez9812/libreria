import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios.component';


@NgModule({
  imports: [
    CommonModule,
    ServiciosRoutingModule,

  ],
  declarations: [
    ServiciosComponent
  ]
})

export class ServiciosModule {}
