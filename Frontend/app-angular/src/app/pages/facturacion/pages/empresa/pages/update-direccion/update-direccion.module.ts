import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsModule, FormFieldModule, IndicatorsModule, InputModule, PopupsModule, SpinnerModule, UserPhotoModule } from '@app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { UpdateDireccionRoutingModule } from './update-direccion-routing.module';
import { UpdateDireccionComponent } from './update-direccion.component';
import { MapperService } from '../../service';


@NgModule({
  declarations: [
    UpdateDireccionComponent
  ],
  imports: [
    CommonModule,
    UpdateDireccionRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    ControlsModule,
    IndicatorsModule,
    PopupsModule,
    FormFieldModule,
    InputModule,
    UserPhotoModule,
    SpinnerModule
  ],
  providers:[
    MapperService
  ]
})
export class UpdateDireccionModule { }
