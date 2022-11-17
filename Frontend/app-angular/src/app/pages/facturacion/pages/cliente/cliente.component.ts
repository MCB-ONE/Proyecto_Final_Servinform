import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pagination } from '@app/store/empresa/empresa.models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store/app.state';
import { getActiveEmpresa, getLoading, getPagination } from '@app/store/empresa/empresa.selectors';
import { EmpresaActions } from '@app/store/empresa/empresa.actions';
import { Empresa } from '@app/models/backend';
import { TableColumn } from '@app/models/frontend';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
