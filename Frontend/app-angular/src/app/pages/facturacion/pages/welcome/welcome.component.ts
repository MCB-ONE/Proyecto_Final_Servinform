import { Component, OnInit } from '@angular/core';
import { Pagination } from '@app/store/empresa/empresa.models';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store/app.state';
import { getActiveEmpresa, getLoading, getPagination } from '@app/store/empresa/empresa.selectors';
import { EmpresaActions } from '@app/store/empresa/empresa.actions';
import { Empresa } from '@app/models/backend';
import { TableColumn } from '@app/models/frontend';
import { HttpParams } from '@angular/common/http';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { ModalClientesComponent } from '../factura/components/modal-clientes/modal-clientes.component';
import { Router } from '@angular/router';
import { ClienteResponse } from '@app/store/cliente/cliente.models';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  params = new HttpParams();
  pagination$ !: Observable<Pagination>
  isLoading$ !: Observable<boolean | null>;
  empresa$ !: Observable<Empresa | null>
  direccionesTableColumns !: TableColumn[];
  clientes !: ClienteResponse[];


  constructor(
    private store: Store<fromRoot.AppState>,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(EmpresaActions.readAllStart({
      requestPagination: this.params,
      paramsUrl: this.params.toString()
    }))
    this.pagination$ = this.store.select(getPagination) as Observable<Pagination>

    this.isLoading$ = this.store.pipe(select(getLoading));

    this.store.dispatch(EmpresaActions.readActiveStart());

    this.empresa$ = this.store.select(getActiveEmpresa) as Observable<Empresa | null>

    this.empresa$.subscribe((data) => {
      if(data){
        this.clientes = data.clientes;
      }
    })
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ModalClientesComponent, {
      width: '380px',
      data: this.clientes
    });

    dialogRef.afterClosed().subscribe(data => {
      if(data){
        this.store.dispatch(EmpresaActions.selectActiveCliente({ clienteId: data.cliente }));
        this.router.navigate(['/facturacion/facturas/nueva']);
      }
    });
  }

  onEmpresaSelect(empresaId: string) {
    this.store.dispatch(EmpresaActions.changeActiveEmpresaStart({ empresaId }))
    //this.store.dispatch(EmpresaActions.readActiveStart())
  }

  //TODO Método eliminar empresa
  onRemoveEmpresa(empresaId: string) {
    console.log(empresaId);
  }

}
