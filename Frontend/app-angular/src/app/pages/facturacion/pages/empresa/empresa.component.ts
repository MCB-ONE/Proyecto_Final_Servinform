import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pagination } from '@app/store/empresa/empresa.models';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store/app.state';
import { getActiveEmpresa, getLoading, getPagination } from '@app/store/empresa/empresa.selectors';
import { EmpresaActions } from '@app/store/empresa/empresa.actions';
import { Empresa } from '@app/models/backend';
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
  empresa$ !: Observable<Empresa | null>
  pagination !: Pagination;
  empresasTableColumns !: TableColumn[];


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

    this.empresa$ = this.store.select(getActiveEmpresa) as Observable<Empresa | null>

    // Activar ultima empresa creada
    this.empresa$.subscribe((data) => {
      if (data == undefined) {
        this.pagination$.subscribe((data) => {
          if (data) {
            this.store.dispatch(EmpresaActions.selectActiveEmpresa({ empresaId: data.data[0].id }))
          }
        })
      }
    })

    this.empresa$ = this.store.select(getActiveEmpresa) as Observable<Empresa | null>

    this.store.pipe(select(getPagination))
      .subscribe((data: any) => {
        this.pagination = data;
      })

    this.initColumns();

  }

  onEmpresaSelect(empresaId: string) {
    this.store.dispatch(EmpresaActions.selectActiveEmpresa({ empresaId }))
    this.empresa$.subscribe(data => console.log(data))
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

  removeEmpresa(empresaId: string) {
    console.log(empresaId);
  }

}
