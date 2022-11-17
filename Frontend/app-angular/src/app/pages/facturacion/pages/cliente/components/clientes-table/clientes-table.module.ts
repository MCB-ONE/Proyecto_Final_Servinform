import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesTableComponent } from './clientes-table.component';
import { DataPropertyGetterPipe } from './pipes/data-property-getter.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ClientesTableComponent,
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
    MatButtonModule
  ],
  exports:[
    ClientesTableComponent
  ]
})
export class ClientesTableModule { }
