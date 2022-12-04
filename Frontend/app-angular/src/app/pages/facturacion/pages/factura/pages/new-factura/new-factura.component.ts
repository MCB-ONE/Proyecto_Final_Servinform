import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { regexErrors } from '@app/shared';
import { EmpresaResponse } from '@app/store/empresa/empresa.models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store/app.state';
import { getActiveEmpresa } from '@app/store/empresa/empresa.selectors';
import { IControlItem } from '@app/models/frontend';

@Component({
  selector: 'app-new-factura',
  templateUrl: './new-factura.component.html',
  styleUrls: ['./new-factura.component.scss']
})
export class NewFacturaComponent implements OnInit {

  loading$ !: Observable<boolean | null>
  form !: FormGroup;
  regexErrors = regexErrors;
  activeEmpresa$!: Observable<EmpresaResponse | null>
  ivaOptions!: IControlItem[];
  empresaDirecciones: IControlItem[] = [];

  constructor(
    private store: Store<fromRoot.AppState>,
    private fb: FormBuilder
  ) {
    this.ivaOptions = [
      { label: '4%', value: 4},
      { label: '10%', value: 10},
      { label: '21%', value: 21},
    ]
  }

  ngOnInit(): void {
    this.activeEmpresa$ = this.store.select(getActiveEmpresa) as Observable<EmpresaResponse | null>

    this.activeEmpresa$.subscribe((data) => {
      if(data){
        const direcciones = data?.direcciones;
        direcciones.forEach(dir => {
          this.empresaDirecciones.push({ label: dir.calle, value: dir.id})
        });
        console.log(this.empresaDirecciones);
      }
    })

    this.form = this.fb.group({
      fechaExpedicion: [null, {
        updateOn: 'blur'
      }],
      iva: [null, {
        updateOn: 'blur'
      }],
      direccionEmpresaId: [null, {
        updateOn: 'blur'
      }],
    })
  }

  onSubmit(): void {
    console.log(this.form.value);
    // let empresaId!: string;

    // this.activeEmpresa$.subscribe((data) => {
    //   if(data){
    //     return empresaId = data.id;
    //   }
    //   return empresaId = '';
    // })

    // if (this.form.valid) {
    //   this.loading$ = this.store.pipe(select(getLoading));
    //   const value = this.form.value;
    //   const direccion: DireccionCreateRequest = {
    //     empresaId: empresaId,
    //     calle: value.calle,
    //     numero: value.numero,
    //     codigoPostal: value.codigoPostal,
    //     ciudad: value.ciudad,
    //     provincia: value.provincia,
    //     pais: value.pais,
    //     telefono: value.telefono,
    //     email: value.email,
    //     web: value.web
    //   }
    //   console.log(direccion)
    //   this.store.dispatch(DireccionActions.createStart({ direccion: direccion }))
    // }else{
    //   markFormGroupTouched(this.form);
    // }
  }


}
