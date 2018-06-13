import {NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children:[
            {path: '', redirectTo: 'dashboard'},
            {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
            {path: 'agregados', loadChildren: './agregados/agregados.module#AgregadosModule'},
            {path: 'clientes', loadChildren: './clientes/clientes.module#ClientesModule'},
            {path: 'factura', loadChildren: './factura/factura.module#FacturaModule'},
            {path: 'proveedor', loadChildren: './proveedor/proveedor.module#ProveedorModule'},
            {path: 'proventa', loadChildren: './proventa/proventa.module#ProventaModule'},
            {path: 'servicios', loadChildren: './servicios/servicios.module#ServiciosModule'},
            {path: 'sucursales', loadChildren: './sucursales/sucursales.module#SucursalesModule'},
            {path: 'usuarios', loadChildren: './usuarios/usuarios.module#UsuariosModule'},
            {path: 'ventas', loadChildren: './ventas/ventas.module#VentasModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LayoutRoutingModule { }