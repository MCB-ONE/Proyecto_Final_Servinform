import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UsuarioResponse } from '../../store/usuario';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();

  @Input() isAuthorized !: boolean | null;
  @Input() user !: UsuarioResponse | null;

  @Output() signOut = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSignOut(): void {
    this.signOut.emit();
  }

}
