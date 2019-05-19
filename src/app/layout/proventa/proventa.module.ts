import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProventaRoutingModule } from './proventa-routing.module';
import { ProventaComponent } from './proventa.component';

@NgModule({
  imports: [
    CommonModule,
    ProventaRoutingModule,

  ],
  declarations: [
    ProventaComponent
  ]
})

export class ProventaModule {}
