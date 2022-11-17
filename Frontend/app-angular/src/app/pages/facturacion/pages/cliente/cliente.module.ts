import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { SpinnerModule} from '@app/shared';
import { EmpresaInfoDisplayModule } from '../../components/empresa-info-display/empresa-info-display.module';
import { ClientesTableModule } from './components/clientes-table/clientes-table.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ClienteComponent,
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    SpinnerModule,
    ClientesTableModule,
    EmpresaInfoDisplayModule,
    MatButtonModule
  ]
})
export class ClienteModule { }
