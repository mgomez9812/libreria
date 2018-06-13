import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FacturaComponent } from './factura.component';

const routes: Routes = [
    {
        path: '',
        component: FacturaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FacturaRoutingModule {}