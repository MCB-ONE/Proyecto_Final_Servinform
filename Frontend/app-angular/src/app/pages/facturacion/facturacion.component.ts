import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaActions } from '@app/store/empresa/empresa.actions';
import { Pagination } from '@app/store/empresa/empresa.models';
import { getLoading, getPagination } from '@app/store/empresa/empresa.selectors';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../store/app.state';
import * as fromUsuario from '../../store/usuario';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})
export class FacturacionComponent implements OnInit {
  usuario$ !: Observable<fromUsuario.UsuarioResponse>;
  isAuthorized$ !: Observable<boolean>

  params = new HttpParams();
  isLoading$ !: Observable<boolean | null>;
  pagination$ !: Observable<Pagination | null>
  activeEmpresaExist$ !: Observable<boolean>

  constructor(
    private store: Store<fromRoot.AppState>,
    private router: Router
  ) {

  }

  ngOnInit(): void {

    //Seleccionar informacion del usuario
    this.usuario$ = this.store.pipe(select(fromUsuario.getUsuario)) as Observable<fromUsuario.UsuarioResponse>
    this.isAuthorized$ = this.store.pipe(select(fromUsuario.getIsAuthorized)) as Observable<boolean>
    this.store.dispatch(new fromUsuario.Init());

    //Seleccionar empresas y seleccionar empresa activa incial
    this.params = this.params.set('pageIndex', 1);
    this.params = this.params.set('pageSize', 3);
    this.params = this.params.set('sort', 'idDesc');

    this.store.dispatch(EmpresaActions.readAllStart({
      requestPagination: this.params,
      paramsUrl: this.params.toString()
    }))

    this.isLoading$ = this.store.pipe(select(getLoading));

    this.pagination$ = this.store.pipe(select(getPagination));

  }

  onSignOut(): void {
    localStorage.removeItem('token');
    this.store.dispatch(new fromUsuario.SignOut());
    this.router.navigate(['/auth/login']);
  }
}
