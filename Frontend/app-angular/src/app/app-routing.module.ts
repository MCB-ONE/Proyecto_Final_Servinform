import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './pages/container/container.component';

const routes: Routes = [

  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: "auth",
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: "demo",
        loadChildren: () => import('./pages/demo/demo.module').then(m => m.DemoModule)
      },
      {
        path: 'static',
        loadChildren: () => import('./pages/static/static.module').then(m => m.StaticModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth'
      }
    ]
  },
  {
    path: 'facturacion',
    loadChildren: () => import('./pages/facturacion/facturacion.module').then(m => m.FacturacionModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'static/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
