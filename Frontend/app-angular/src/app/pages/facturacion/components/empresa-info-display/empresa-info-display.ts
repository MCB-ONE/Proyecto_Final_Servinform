import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-info-display',
  templateUrl: './empresa-info-display.html',
  styleUrls: ['./empresa-info-display.scss']
})
export class EmpresaInfoDisplayComponent implements OnInit {

  @Input() title!: string;
  @Input() icon: string | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
