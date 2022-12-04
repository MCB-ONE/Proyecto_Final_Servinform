import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalClientesComponent } from './modal-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ControlsModule } from '@app/shared';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ModalClientesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    ControlsModule
  ]
})
export class ModalClientesModule { }
