import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent
  },
  {
    path: 'cliente/nueva',
    loadChildren: () => import('./pages/new-cliente/new-cliente.module').then(m=> m.NewClienteModule)
  },
  {
    path: 'cliente/:id',
    loadChildren: () => import('./pages/update-cliente/update-cliente.module').then(m=> m.UpdateClienteModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'static/404'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
