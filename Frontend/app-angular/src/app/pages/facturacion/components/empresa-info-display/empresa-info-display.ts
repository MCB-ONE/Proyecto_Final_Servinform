import { Component, Input, OnInit } from '@angular/core';
import { Empresa } from '@app/models/backend';
import { Store } from '@ngrx/store';
import * as fromRoot from '@app/store/app.state';
import { getActiveEmpresa } from '@app/store/empresa/empresa.selectors';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-empresa-info-display',
  templateUrl: './empresa-info-display.html',
  styleUrls: ['./empresa-info-display.scss']
})
export class EmpresaInfoDisplayComponent implements OnInit {

  @Input() title!: string;
  @Input() icon: string | null = null;
  @Input() empresa !: Empresa;

  constructor(
    private store: Store<fromRoot.AppState>,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ) {
      this.matIconRegistry.addSvgIcon(
        `add-company`,
        this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/add-company-icon.svg')
      );
     }

  ngOnInit(): void {

    this.store.select(getActiveEmpresa).subscribe((data)=> {
      if(data){
        this.empresa = data;
      }
    })
  }

}
