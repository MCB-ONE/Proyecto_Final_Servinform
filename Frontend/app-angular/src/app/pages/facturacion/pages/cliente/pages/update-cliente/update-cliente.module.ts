import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateClienteRoutingModule } from './update-cliente-routing.module';
import { UpdateClienteComponent } from './update-cliente.component';


@NgModule({
  declarations: [
    UpdateClienteComponent
  ],
  imports: [
    CommonModule,
    UpdateClienteRoutingModule
  ]
})
export class UpdateClienteModule { }
