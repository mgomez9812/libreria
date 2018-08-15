import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProventaComponent } from './proventa.component';

const routes: Routes =[
  {
    path: '',
    component: ProventaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProventaRoutingModule {}
