import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewDireccionRoutingModule } from './new-direccion-routing.module';
import { NewDireccionComponent } from './new-direccion.component';


@NgModule({
  declarations: [
    NewDireccionComponent
  ],
  imports: [
    CommonModule,
    NewDireccionRoutingModule
  ]
})
export class NewDireccionModule { }
