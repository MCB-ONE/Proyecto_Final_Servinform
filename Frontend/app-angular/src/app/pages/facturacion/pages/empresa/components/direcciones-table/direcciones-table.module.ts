import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DireccionesTableComponent } from './direcciones-table.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { DataPropertyGetterPipe } from './pipes/data-property-getter.pipe';


@NgModule({
  declarations: [
    DireccionesTableComponent,
    DataPropertyGetterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    DireccionesTableComponent
  ]
})
export class DireccionesTableModule { }
