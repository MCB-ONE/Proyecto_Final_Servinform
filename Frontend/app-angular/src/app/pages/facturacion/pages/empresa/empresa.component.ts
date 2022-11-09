import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pagination } from '@app/store/empresa/empresa.models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store/app.state';
import { getActiveEmpresa, getLoading, getPagination } from '@app/store/empresa/empresa.selectors';
import { EmpresaActions } from '@app/store/empresa/empresa.actions';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {
  params = new HttpParams();
  isLoading$ !: Observable<boolean | null>;
  pagination$ !: Observable<Pagination>
  empresa$ !: Observable<void>



  constructor(
    private store: Store<fromRoot.AppState>,
  ) { }

  ngOnInit(): void {
    this.params = this.params.set('pageIndex', 1);
    this.params = this.params.set('pageSize', 3);
    this.params = this.params.set('sort', 'idDesc');
    this.isLoading$ = this.store.select(getLoading);
    this.store.dispatch(EmpresaActions.readAllStart({
      requestPagination: this.params,
      paramsUrl: this.params.toString()
    }))
    this.pagination$ = this.store.select(getPagination) as Observable<Pagination>
    this.empresa$ = this.store.select(getActiveEmpresa) as Observable<void>
  }

  onEmpresaSelect(empresaId: string) {
    this.store.dispatch(EmpresaActions.readActiveEmpresa({empresaId}))
    this.empresa$.subscribe(data => console.log(data))
  }

}
