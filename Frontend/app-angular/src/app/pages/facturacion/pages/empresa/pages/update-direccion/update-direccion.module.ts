import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateDireccionRoutingModule } from './update-direccion-routing.module';
import { UpdateDireccionComponent } from './update-direccion.component';


@NgModule({
  declarations: [
    UpdateDireccionComponent
  ],
  imports: [
    CommonModule,
    UpdateDireccionRoutingModule
  ]
})
export class UpdateDireccionModule { }
