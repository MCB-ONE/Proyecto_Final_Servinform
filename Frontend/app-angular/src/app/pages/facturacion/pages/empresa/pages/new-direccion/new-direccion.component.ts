import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { markFormGroupTouched, regex, regexErrors } from '@app/shared/utils';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store/app.state';
import { getLoading } from '@app/store/direccion/direccion.selectors';
import { DireccionCreateRequest } from '@app/store/direccion/direccion.models';
import { DireccionActions } from '@app/store/direccion/direccion.actions';
import { getActiveEmpresaId } from '@app/store/empresa/empresa.selectors';

@Component({
  selector: 'app-new-direccion',
  templateUrl: './new-direccion.component.html',
  styleUrls: ['./new-direccion.component.scss']
})
export class NewDireccionComponent implements OnInit {

  loading$ !: Observable<boolean | null>
  form !: FormGroup;
  regexErrors = regexErrors;
  empresaId$ !: Observable<string | null>


  constructor(
    private store: Store<fromRoot.AppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.empresaId$ = this.store.select(getActiveEmpresaId) as Observable<string | null>

    this.form = this.fb.group({
      calle: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(256)
        ]
      }],
      numero: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.maxLength(3),
          Validators.pattern(regex.number)
        ]
      }],
      codigoPostal: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.maxLength(5),
          Validators.minLength(5),
          Validators.pattern(regex.number)
        ]
      }],
      ciudad: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.minLength(2)
        ]
      }],
      provincia: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.minLength(3),
        ]
      }],
      pais: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.minLength(3),
        ]
      }],
      telefono: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(9),
          Validators.pattern(regex.number)
        ]
      }],
      email: [null, {
        updateOn: 'blur', validators: [
          Validators.pattern(regex.email)
        ]
      }],
      web: [null, {
        updateOn: 'blur', validators: [
          Validators.pattern(regex.web)
        ]
      }],
    })
  }

  onSubmit(): void {

    let empresaId!: string;

    this.empresaId$.subscribe((data) => {
      if(data){
        return empresaId = data;
      }
      return empresaId = '';
    })

    if (this.form.valid) {
      this.loading$ = this.store.pipe(select(getLoading));
      const value = this.form.value;
      const direccion: DireccionCreateRequest = {
        empresaId: empresaId,
        calle: value.calle,
        numero: value.numero,
        codigoPostal: value.codigoPostal,
        ciudad: value.ciudad,
        provincia: value.provincia,
        pais: value.pais,
        telefono: value.telefono,
        email: value.email,
        web: value.web
      }
      console.log(direccion)
      this.store.dispatch(DireccionActions.createStart({ direccion: direccion }))
    }else{
      markFormGroupTouched(this.form);
    }
  }


}
