import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaListComponent } from './empresa-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmpresaListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule
  ],
  exports: [
    EmpresaListComponent
  ]
})
export class EmpresaListModule { }
