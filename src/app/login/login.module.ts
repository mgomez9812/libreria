//componentes de angular 
import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';


//componentes del routing 
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports:[
        CommonModule,
        LoginRoutingModule
    ],
    declarations:[
                LoginComponent
    ]

})
export class LoginModule {}