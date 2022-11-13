import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DataPropertyGetterPipe } from './pipes/data-property-getter.pipe';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    TableComponent,
    DataPropertyGetterPipe,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
