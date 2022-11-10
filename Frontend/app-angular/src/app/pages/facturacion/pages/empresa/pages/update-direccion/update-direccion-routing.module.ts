import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateDireccionComponent } from './update-direccion.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateDireccionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateDireccionRoutingModule { }
