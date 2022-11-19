import { Component, OnInit } from '@angular/core';
import { EmpresaResponse, Pagination } from '@app/store/empresa/empresa.models';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store/app.state';
import { getActiveEmpresa, getPagination } from '@app/store/empresa/empresa.selectors';
import { TableColumn } from '@app/models/frontend';

@Component({
  selector: 'app-list-direcciones',
  templateUrl: './list-direcciones.component.html',
  styleUrls: ['./list-direcciones.component.scss']
})
export class ListDireccionesComponent implements OnInit {
  empresa !: EmpresaResponse;
  direccionesTableColumns !: TableColumn[];

  constructor(
    private store: Store<fromRoot.AppState>,
  ) { }

  ngOnInit(): void {

    this.store.pipe(select(getActiveEmpresa))
      .subscribe((data: any) => {
        this.empresa = data;
      })

    this.initColumns();
  }

  initColumns(): void {
    this.direccionesTableColumns = [
      {
        name: 'Calle',
        dataKey: 'calle',
        isSortable: true,
      },
      {
        name: 'Número',
        dataKey: 'numero',
        isSortable: true,
      },
      {
        name: 'C.P',
        dataKey: 'codigoPostal',
        isSortable: true,
      },
      {
        name: 'Ciudad',
        dataKey: 'ciudad',
        isSortable: true,
      },
      {
        name: 'Provincia',
        dataKey: 'provincia',
        isSortable: true,
      },
      {
        name: 'País',
        dataKey: 'pais',
        isSortable: true,
      },
      {
        name: 'Teléfono',
        dataKey: 'telefono',
        isSortable: true,
      },
      {
        name: 'Email',
        dataKey: 'email',
        isSortable: true,
      },
      {
        name: 'Web',
        dataKey: 'web',
        isSortable: false,
      },
    ];
  }

}
