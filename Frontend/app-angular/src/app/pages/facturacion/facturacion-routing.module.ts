import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturacionComponent } from './facturacion.component';

const routes: Routes = [
  {
    path: '',
    component: FacturacionComponent,
    children: [
      {
        path: 'welcome',
        loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
      },
      {
        path: 'empresas',
        loadChildren: () => import('./pages/empresas/empresas.module').then(m => m.EmpresasModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'empresas'
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'static/404'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturacionRoutingModule { }
