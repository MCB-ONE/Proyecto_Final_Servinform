import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empresa } from '@app/models/backend';

@Component({
  selector: 'app-empresa-detail',
  templateUrl: './empresa-detail.component.html',
  styleUrls: ['./empresa-detail.component.scss']
})
export class EmpresaDetailComponent implements OnInit {
  panelOpenState = false;

  @Input() empresa !: Empresa;
  @Output() selectEmpresa: EventEmitter<string>
  constructor() {
    this.selectEmpresa = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onSelected(empresaId: string ){
    this.selectEmpresa.emit(empresaId);
  }

}
