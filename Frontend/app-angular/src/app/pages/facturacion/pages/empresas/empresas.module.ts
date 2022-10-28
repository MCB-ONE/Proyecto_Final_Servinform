import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasComponent } from './empresas.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    EmpresasComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class EmpresasModule { }
