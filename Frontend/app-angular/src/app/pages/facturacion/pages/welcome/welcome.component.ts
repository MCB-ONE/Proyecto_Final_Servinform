import { Component, OnInit } from '@angular/core';
import { Pagination } from '@app/store/empresa/empresa.models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store/app.state';
import { getActiveEmpresa, getPagination } from '@app/store/empresa/empresa.selectors';
import { EmpresaActions } from '@app/store/empresa/empresa.actions';
import { Empresa } from '@app/models/backend';
import { TableColumn } from '@app/models/frontend';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  pagination$ !: Observable<Pagination>
  empresa$ !: Observable<Empresa | null>
  direccionesTableColumns !: TableColumn[];


  constructor(
    private store: Store<fromRoot.AppState>,
  ) { }

  ngOnInit(): void {
    this.pagination$ = this.store.select(getPagination) as Observable<Pagination>

    this.store.dispatch(EmpresaActions.readActiveStart());

    this.empresa$ = this.store.select(getActiveEmpresa) as Observable<Empresa | null>
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
