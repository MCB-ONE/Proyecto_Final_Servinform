import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DireccionesListComponent } from './direcciones-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DireccionesListComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    DireccionesListComponent
  ]
})
export class DireccionesListModule { }
