import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendedorComponent } from './vendedor.component';

const routes: Routes = [
    {
        path:'',
        component: VendedorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class VendedorRoutingModule {}