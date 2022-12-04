import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewFacturaRoutingModule } from './new-factura-routing.module';
import { NewFacturaComponent } from './new-factura.component';
import { ControlsModule, DateModule, FormFieldModule, IndicatorsModule, InputModule, PopupsModule, SpinnerModule, UserPhotoModule } from '@app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    NewFacturaComponent
  ],
  imports: [
    CommonModule,
    NewFacturaRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    ControlsModule,
    DateModule,
    IndicatorsModule,
    PopupsModule,
    FormFieldModule,
    InputModule,
    UserPhotoModule,
    SpinnerModule,
  ]
})
export class NewFacturaModule { }
