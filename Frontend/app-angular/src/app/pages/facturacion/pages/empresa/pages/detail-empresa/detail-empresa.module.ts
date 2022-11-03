import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DetailEmpresaRoutingModule } from './detail-empresa-routing.module';
import { DetailEmpresaComponent } from './detail-empresa.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    DetailEmpresaComponent
  ],
  imports: [
    CommonModule,
    DetailEmpresaRoutingModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class DetailEmpresaModule { }
