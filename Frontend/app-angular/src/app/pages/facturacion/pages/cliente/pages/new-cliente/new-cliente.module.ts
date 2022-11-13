import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewClienteRoutingModule } from './new-cliente-routing.module';
import { NewClienteComponent } from './new-cliente.component';


@NgModule({
  declarations: [
    NewClienteComponent
  ],
  imports: [
    CommonModule,
    NewClienteRoutingModule
  ]
})
export class NewClienteModule { }
