import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {path: '', loadChildren: './login/login.module#LoginModule'},
    {path: 'layout', loadChildren: './layout/layout.module#LayoutModule'},
    {path: 'vendedor', loadChildren: './vendedor/vendedor.module#VendedorModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
