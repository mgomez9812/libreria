import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { VendedorComponent } from './vendedor.component';

@NgModule({
    imports:[
        CommonModule,
        VendedorRoutingModule
    ],
    declarations:[
        VendedorComponent
    ]
})

export class VendedorModule {} 