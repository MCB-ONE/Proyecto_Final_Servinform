import { Component, Input, OnInit } from '@angular/core';
import { Empresa } from '@app/models/backend';

@Component({
  selector: 'app-empresa-detail',
  templateUrl: './empresa-detail.component.html',
  styleUrls: ['./empresa-detail.component.scss']
})
export class EmpresaDetailComponent implements OnInit {
  panelOpenState = false;

  @Input() empresa !: Empresa;

  constructor() { }

  ngOnInit(): void {
  }

}
