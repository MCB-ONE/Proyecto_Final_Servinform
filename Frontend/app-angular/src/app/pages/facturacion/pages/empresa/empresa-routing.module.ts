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
    path: 'direcciones',
    loadChildren: () => import('./pages/list-direcciones/list-direcciones.module').then(m=> m.ListDireccionesModule)
  },
  {
    path: 'direccion/nueva',
    loadChildren: () => import('./pages/new-direccion/new-direccion.module').then(m=> m.NewDireccionModule)
  },
  {
    path: 'direccion/:id',
    loadChildren: () => import('./pages/update-direccion/update-direccion.module').then(m=> m.UpdateDireccionModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./pages/update-empresa/update-empresa.module').then(m=> m.UpdateEmpresaModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
