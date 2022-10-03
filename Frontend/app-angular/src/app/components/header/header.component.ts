import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDivider} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit {

  @Output() menuClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickerd() : void{
    this.menuClicked.emit();
  }

}
