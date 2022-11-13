import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { MatButtonModule } from '@angular/material/button';
import { ControlsModule, IndicatorsModule, LayoutsModule, PopupsModule } from '@app/shared';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    ControlsModule,
    IndicatorsModule,
    PopupsModule,
    LayoutsModule
  ]
})
export class SharedModule { }
