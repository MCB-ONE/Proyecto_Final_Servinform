import { Component, Input, OnInit } from '@angular/core';
import { Direccion } from '@app/models/backend';

@Component({
  selector: 'app-direcciones-list',
  templateUrl: './direcciones-list.component.html',
  styleUrls: ['./direcciones-list.component.scss']
})
export class DireccionesListComponent implements OnInit {

  panelOpenState = false;
  @Input() direcciones !: Direccion[];



  constructor() { }

  ngOnInit(): void {
  }

}
