import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-empresa',
  templateUrl: './detail-empresa.component.html',
  styleUrls: ['./detail-empresa.component.scss']
})
export class DetailEmpresaComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
