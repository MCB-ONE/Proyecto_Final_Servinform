import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empresa } from '@app/models/backend';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.scss']
})
export class EmpresaListComponent implements OnInit {

  @Input() empresas !: Empresa[];
  @Output() selectEmpresa: EventEmitter<string>

  constructor() {
    this.selectEmpresa = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onSelected(empresaId: string ){
    console.log(empresaId);
    this.selectEmpresa.emit(empresaId);
  }
}
