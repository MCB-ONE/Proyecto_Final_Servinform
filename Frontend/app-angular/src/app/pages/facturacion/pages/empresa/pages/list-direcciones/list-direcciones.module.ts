import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDireccionesRoutingModule } from './list-direcciones-routing.module';
import { ListDireccionesComponent } from './list-direcciones.component';
import { DireccionesTableModule } from '../../components/direcciones-table/direcciones-table.module';
import { SpinnerModule } from '@app/shared';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ListDireccionesComponent
  ],
  imports: [
    CommonModule,
    ListDireccionesRoutingModule,
    DireccionesTableModule,
    SpinnerModule,
    MatButtonModule
  ]
})
export class ListDireccionesModule { }
