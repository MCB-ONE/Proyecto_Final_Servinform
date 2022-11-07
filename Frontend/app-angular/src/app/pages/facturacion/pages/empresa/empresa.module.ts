import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaComponent } from './empresa.component';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { EmpresaListComponent } from './components/empresa-list/empresa-list.component';
import { EmpresaDetailComponent } from './components/empresa-detail/empresa-detail.component';
import { SpinnerModule } from '@app/shared';

@NgModule({
  declarations: [
    EmpresaComponent,
    EmpresaListComponent,
    EmpresaDetailComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    SpinnerModule
  ]
})
export class EmpresaModule { }
