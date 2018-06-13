import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AgregadosComponent } from './agregados.component';

const routes: Routes = [
    {
        path: '',
        component: AgregadosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AgregadosRoutingModule {} 