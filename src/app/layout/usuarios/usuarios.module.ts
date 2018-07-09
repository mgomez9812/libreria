import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';


@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule

  ],
  declarations: [
    UsuariosComponent
  ]
})

export class UsuariosModule {}
