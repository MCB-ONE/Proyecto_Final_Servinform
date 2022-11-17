import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '@app/store/app.state';
import { Observable } from 'rxjs';
import { markFormGroupTouched, regex, regexErrors } from '@app/shared/utils';
import { getLoading } from '@app/store/cliente/cliente.selectors';
import { ClienteRequest } from '@app/store/cliente/cliente.models';
import { getActiveEmpresaId } from '@app/store/empresa/empresa.selectors';
import { ClienteActions } from '@app/store/cliente/cliente.actions';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.scss']
})
export class NewClienteComponent implements OnInit {
  loading$ !: Observable<boolean | null>
  empresaId$!: Observable<string | null>
  form !: FormGroup;
  regexErrors = regexErrors;


  constructor(
    private store: Store<fromRoot.AppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.empresaId$ = this.store.select(getActiveEmpresaId) as Observable<string | null>

    this.form = this.fb.group({
      nombre: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(256)
        ]
      }],
      nif: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(9),
          Validators.pattern(regex.nif)
        ]
      }],
      logo: [null]
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
      const cliente: ClienteRequest = {
        nombre: value.nombre,
        nif: value.nif,
        logo: value.logo,
        empresaId: empresaId,
      }
      this.store.dispatch(ClienteActions.createStart({ cliente: cliente }))
    }else{
      markFormGroupTouched(this.form);
    }
  }

  onFilesChanged(url: any): void {
    if(url){
      this.form.controls['logo'].setValue(url);
    }
  }
}
