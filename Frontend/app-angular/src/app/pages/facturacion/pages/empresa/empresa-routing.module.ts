import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './empresa.component';

const routes: Routes = [
  {
    path: '',
    component: EmpresaComponent
  },
  {
    path: 'nueva',
    loadChildren: () => import('./pages/new-empresa/new-empresa.module').then(m=> m.NewEmpresaModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./pages/update-empresa/update-empresa.module').then(m=> m.UpdateEmpresaModule)
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
export class EmpresaRoutingModule { }
