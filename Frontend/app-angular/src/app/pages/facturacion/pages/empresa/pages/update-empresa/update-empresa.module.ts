import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateEmpresaRoutingModule } from './update-empresa-routing.module';
import { UpdateEmpresaComponent } from './update-empresa.component';


@NgModule({
  declarations: [
    UpdateEmpresaComponent
  ],
  imports: [
    CommonModule,
    UpdateEmpresaRoutingModule
  ]
})
export class UpdateEmpresaModule { }
