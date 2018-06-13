import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorRoutingModule } from './proveedor-routing.module';
import { ProveedorComponent } from './proveedor.component';

@NgModule({
    imports: [
        CommonModule,
        ProveedorRoutingModule
    ],
    declarations: [
        ProveedorComponent
    ]

})

export class ProveedorModule {}