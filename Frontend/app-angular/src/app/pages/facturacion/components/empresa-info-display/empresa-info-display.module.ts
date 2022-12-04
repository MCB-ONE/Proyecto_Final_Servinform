import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaInfoDisplayComponent } from './empresa-info-display';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmpresaInfoDisplayComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports:[
    EmpresaInfoDisplayComponent
  ]
})
export class EmpresaInfoDisplayModule { }
