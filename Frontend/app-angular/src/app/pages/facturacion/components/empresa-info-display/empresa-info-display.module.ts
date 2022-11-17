import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaInfoDisplayComponent } from './empresa-info-display';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    EmpresaInfoDisplayComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    EmpresaInfoDisplayComponent
  ]
})
export class EmpresaInfoDisplayModule { }
