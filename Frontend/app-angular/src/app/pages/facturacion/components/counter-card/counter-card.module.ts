import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterCardComponent } from './counter-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CounterCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    CounterCardComponent
  ]
})
export class CounterCardModule { }
