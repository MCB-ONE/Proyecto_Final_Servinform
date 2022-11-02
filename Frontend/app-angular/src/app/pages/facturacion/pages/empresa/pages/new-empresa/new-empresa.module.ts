import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewEmpresaRoutingModule } from './new-empresa-routing.module';
import { NewEmpresaComponent } from './new-empresa.component';


@NgModule({
  declarations: [
    NewEmpresaComponent
  ],
  imports: [
    CommonModule,
    NewEmpresaRoutingModule
  ]
})
export class NewEmpresaModule { }
