import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDireccionComponent } from './new-direccion.component';

const routes: Routes = [
  {
    path: '',
    component: NewDireccionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewDireccionRoutingModule { }
