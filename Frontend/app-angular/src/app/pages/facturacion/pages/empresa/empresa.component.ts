import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pagination } from '@app/store/empresa/empresa.models';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store/app.state';
import { getEmpresas, getLoading } from '@app/store/empresa/empresa.selectors';
import { ReadEmpresas } from '@app/store/empresa/empresa.actions';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  params = new HttpParams();

  empresasLoading$ !: Observable<boolean | null>;
  empresasPagination$ !: Observable<Pagination>



  constructor(
    private store: Store<fromRoot.AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(ReadEmpresas({
      requestPagination: this.params,
      paramsUrl: this.params.toString()
    }))

    this.empresasLoading$ = this.store.select(getLoading);
    this.empresasPagination$ = this.store.select(getEmpresas) as Observable<Pagination>
    this.params = this.params.set('pageIndex', 1);
    this.params = this.params.set('pageSize', 5);
  }

}
