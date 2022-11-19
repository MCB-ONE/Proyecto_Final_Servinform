import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDireccionesComponent } from './list-direcciones.component';

const routes: Routes = [
  {
    path: '',
    component: ListDireccionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDireccionesRoutingModule { }
