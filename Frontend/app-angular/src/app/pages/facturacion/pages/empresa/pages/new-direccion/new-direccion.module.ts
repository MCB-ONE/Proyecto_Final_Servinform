import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsModule, FormFieldModule, IndicatorsModule, InputModule, PopupsModule, SpinnerModule, UserPhotoModule } from '@app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NewDireccionRoutingModule } from './new-direccion-routing.module';
import { NewDireccionComponent } from './new-direccion.component';


@NgModule({
  declarations: [
    NewDireccionComponent
  ],
  imports: [
    CommonModule,
    NewDireccionRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    ControlsModule,
    IndicatorsModule,
    PopupsModule,
    FormFieldModule,
    InputModule,
    UserPhotoModule,
    SpinnerModule
  ]
})
export class NewDireccionModule { }
