import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateClienteRoutingModule } from './update-cliente-routing.module';
import { UpdateClienteComponent } from './update-cliente.component';
import { MapperService } from '../../service';
import { FormFieldModule, InputModule, SpinnerModule, UserPhotoModule } from '@app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    UpdateClienteComponent
  ],
  imports: [
    CommonModule,
    UpdateClienteRoutingModule,
    SpinnerModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormFieldModule,
    InputModule,
    UserPhotoModule
  ],
  providers:[
    MapperService
  ]
})
export class UpdateClienteModule { }
