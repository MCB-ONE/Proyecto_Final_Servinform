import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { Pagination } from '@app/store/empresa/empresa.models';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store/app.state';
import { getLoading, getPagination } from '@app/store/empresa/empresa.selectors';
import { EmpresaActions } from '@app/store/empresa/empresa.actions';
import { TableColumn } from '@app/models/frontend';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {
  params = new HttpParams();
  isLoading$ !: Observable<boolean | null>;
  pagination$ !: Observable<Pagination>
  pagination !: Pagination;
  empresasTableColumns !: TableColumn[];


  constructor(
    private store: Store<fromRoot.AppState>,
    private router: Router
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

    this.store.pipe(select(getPagination))
      .subscribe((data: any) => {
        this.pagination = data;
      })

    this.initColumns();

  }

  initColumns(): void {
    this.empresasTableColumns = [
      {
        name: 'Nombre',
        dataKey: 'nombre',
        isSortable: true,
      },
      {
        name: 'Nif',
        dataKey: 'nif',
        isSortable: true,
      },
    ];
  }

  onEmpresaSelect(empresaId: string) {
    this.store.dispatch(EmpresaActions.selectActiveEmpresa({ empresaId }))
    this.router.navigate(['/facturacion/welcome'])
  }

  //TODO Método eliminar empresa
  onRemoveEmpresa(empresaId: string) {
    console.log(empresaId);
  }

}
