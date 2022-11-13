import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuarioResponse } from '@app/store/usuario';
@Component({
  selector: 'app-facturacion-header',
  templateUrl: './facturacion-header.component.html',
  styleUrls: ['./facturacion-header.component.scss']
})
export class FacturacionHeaderComponent implements OnInit {

  @Input() isAuthorized!: boolean | null;
  @Input() usuario!: UsuarioResponse | null;
  @Output() signOut = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }


  onSignOut(): void {
    this.signOut.emit();
  }

}
