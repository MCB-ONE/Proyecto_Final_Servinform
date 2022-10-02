import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface INavItem {
  label: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Input() navItems!: INavItem[];
  @Output() menuToggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  closeMenu() : void {
    this.menuToggle.emit();
  }

}
