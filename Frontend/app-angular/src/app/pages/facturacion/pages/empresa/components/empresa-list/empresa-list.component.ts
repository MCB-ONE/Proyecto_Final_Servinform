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
  @Output() removeEmpresa: EventEmitter<string>


  constructor() {
    this.selectEmpresa = new EventEmitter();
    this.removeEmpresa = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onSelected(empresaId: string ){
    this.selectEmpresa.emit(empresaId);
  }

  onRemove(empresaId: string ){
    this.removeEmpresa.emit(empresaId);
  }
}
