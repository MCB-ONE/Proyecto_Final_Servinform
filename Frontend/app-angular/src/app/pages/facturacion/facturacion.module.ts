import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturacionRoutingModule } from './facturacion-routing.module';
import { FacturacionComponent } from './facturacion.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FacturacionHeaderComponent } from '@app/components/facturacion-header/facturacion-header.component';
import { MenuListComponent } from '@app/components/menu-list/menu-list.component';
import { MatListModule } from '@angular/material/list';
import { FormFieldModule, SelectModule } from '@app/shared';
import { SpinnerModule } from '@app/shared/indicators';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FacturacionComponent,
    FacturacionHeaderComponent,
    MenuListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FacturacionRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    FormFieldModule,
    SpinnerModule,
    SelectModule,
    ReactiveFormsModule
  ]
})
export class FacturacionModule { }
