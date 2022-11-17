import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable} from 'rxjs';
import * as fromRoot from '@app/store/app.state';
import { getActiveEmpresa } from '@app/store/empresa/empresa.selectors';
import { Empresa } from '@app/models/backend';
import { TableColumn } from '@app/models/frontend';
import { Pagination } from '@app/store/cliente/cliente.models';
import { ClienteActions } from '@app/store/cliente/cliente.actions';
import { HttpParams } from '@angular/common/http';
import { getLoading, getPagination, getPaginationRequest } from '@app/store/cliente/cliente.selectors';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  params = new HttpParams();
  isLoading$ !: Observable<boolean | null>;
  pagination$ !: Observable<Pagination>
  empresa$ !: Observable<Empresa | null>
  empresaId !: string;
  clientesPagination !: Pagination;
  direccionesTableColumns !: TableColumn[];

  constructor(
    private store: Store<fromRoot.AppState>,
  ) { }


  ngOnInit(): void {

    this.params = this.params.set('pageIndex', 1);
    this.params = this.params.set('pageSize', 5);
    this.isLoading$ = this.store.select(getLoading);
    this.empresa$ = this.store.select(getActiveEmpresa) as Observable<Empresa | null>
    this.empresa$.subscribe((data) => {
      if (data != null) {
        this.empresaId = data?.id;
         this.store.dispatch(ClienteActions.readAllStart({
          requestPagination: this.params,
          paramsUrl: this.params.toString(),
          selectedEmpresaId: this.empresaId
        }))
      }
    })

    this.store.pipe(select(getPagination))
      .subscribe((data:any)=>{
        this.clientesPagination = data;
      })

    this.initColumns();

  }

  initColumns(): void {
    this.direccionesTableColumns = [
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

  removeCliente(clienteId: string) {
    console.log(clienteId);
  }

}
