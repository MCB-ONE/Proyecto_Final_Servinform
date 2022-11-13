import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { SpinnerModule } from '@app/shared';
import { EmpresaInfoDisplayModule } from '../../components/empresa-info-display/empresa-info-display.module';
import { CounterCardModule } from '../../components/counter-card/counter-card.module';
import { EmpresaListModule } from './components/empresa-list/empresa-list.module';

@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SpinnerModule,
    EmpresaInfoDisplayModule,
    CounterCardModule,
    EmpresaListModule
  ]
})
export class WelcomeModule { }
