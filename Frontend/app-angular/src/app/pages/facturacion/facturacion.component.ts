import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../store/app.state';
import * as fromUsuario from '../../store/usuario';
import * as fromEmpresa from '../../store/empresa/list';
import { Pagination } from '@app/store/empresa/list';
import { HttpParams } from '@angular/common/http';
import { ReadEmpresas } from './pages/empresa/store/list/list.actions';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})
export class FacturacionComponent implements OnInit {
  usuario$ !: Observable<fromUsuario.UsuarioResponse>;
  isAuthorized$ !: Observable<boolean>
  empresasLoading$ !: Observable<boolean | null>;
  empresasPagination$ !: Observable<Pagination>
  params = new HttpParams();

  constructor(
    private store: Store<fromRoot.AppState>,
    private router: Router
  ){

  }

  ngOnInit(): void{
    this.usuario$ = this.store.pipe(select(fromUsuario.getUsuario)) as Observable<fromUsuario.UsuarioResponse>
    this.isAuthorized$ = this.store.pipe(select(fromUsuario.getIsAuthorized)) as Observable<boolean>
    this.store.dispatch(new fromUsuario.Init());

    // this.empresasLoading$ = this.store.pipe(select(fromEmpresa.getLoading));
    // this.empresasPagination$ = this.store.pipe(select(fromEmpresa.getEmpresas)) as Observable<Pagination>
    this.params = this.params.set('pageIndex', 1);
    this.params = this.params.set('pageSize', 5);

    // this.store.dispatch(new fromEmpresa.Read(this.params, this.params.toString()));
    this.store.dispatch(ReadEmpresas({
      requestPagination: this.params,
      paramsUrl: this.params.toString()
    }))

    }

    onSignOut(): void {
      localStorage.removeItem('token');
      this.store.dispatch(new fromUsuario.SignOut());
      this.router.navigate(['/auth/login']);
    }
}
