import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaInfoDisplayComponent } from './empresa-info-display';



@NgModule({
  declarations: [
    EmpresaInfoDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EmpresaInfoDisplayComponent
  ]
})
export class EmpresaInfoDisplayModule { }
