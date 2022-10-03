import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlesRoutingModule } from './controles-routing.module';
import { ControlesComponent } from './controles.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    ControlesComponent
  ],
  imports: [
    CommonModule,
    ControlesRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule
  ]
})
export class ControlesModule { }
