import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregadosRoutingModule } from './agregados-routing.module';
import { AgregadosComponent } from './agregados.component';

@NgModule(
    {
        imports: [
            CommonModule,
            AgregadosRoutingModule,
        ],
        declarations: [
            AgregadosComponent
        ]
    }
)



export class AgregadosModule {}