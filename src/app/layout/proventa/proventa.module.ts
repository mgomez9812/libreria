import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProventaRoutingModule } from './proventa-routing.module';
import { ProventaComponent } from './proventa.component';

@NgModule({
  imports: [
    CommonModule,
    ProventaRoutingModule,
    FormsModule

  ],
  declarations: [
    ProventaComponent
  ]
})

export class ProventaModule {}
