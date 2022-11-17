import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewClienteRoutingModule } from './new-cliente-routing.module';
import { NewClienteComponent } from './new-cliente.component';
import { FormFieldModule, InputModule, SpinnerModule, UserPhotoModule } from '@app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    NewClienteComponent
  ],
  imports: [
    CommonModule,
    NewClienteRoutingModule,
    SpinnerModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormFieldModule,
    InputModule,
    UserPhotoModule

  ]
})
export class NewClienteModule { }
