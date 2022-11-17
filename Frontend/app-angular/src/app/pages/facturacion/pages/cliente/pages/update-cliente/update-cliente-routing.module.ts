import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateClienteComponent } from './update-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateClienteRoutingModule { }
