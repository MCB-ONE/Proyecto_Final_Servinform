import { Component, Input, OnInit } from '@angular/core';
import { Empresa } from '@app/models/backend';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.scss']
})
export class EmpresaListComponent implements OnInit {

  @Input() empresas !: Empresa[];


  constructor() { }

  ngOnInit(): void {
  }

}
