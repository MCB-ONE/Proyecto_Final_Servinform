import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturacionHeaderComponent } from './facturacion-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    FacturacionHeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    FacturacionHeaderComponent
  ]
})
export class FacturacionHeaderModule { }
