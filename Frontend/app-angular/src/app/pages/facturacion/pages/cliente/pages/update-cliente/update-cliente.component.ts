import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '@app/store/app.state';
import { Observable } from 'rxjs';
import { markFormGroupTouched, regex, regexErrors } from '@app/shared/utils';
import { ActivatedRoute, Params } from '@angular/router';
import { MapperService } from '../../service';
import { getCliente, getFormState, getLoading } from '@app/store/cliente/cliente.selectors';
import { ClienteActions } from '@app/store/cliente/cliente.actions';
import { ClienteRequest } from '@app/store/cliente/cliente.models';
import { EmpresaResponse } from '@app/store/empresa/empresa.models';
import { getActiveEmpresa } from '@app/store/empresa/empresa.selectors';


export interface ClienteForm {
  id: string | null;
  empresaId: string | null;
  nombre: string | null;
  nif: string | null;
  logo: string | null;
}


@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.scss']
})
export class UpdateClienteComponent implements OnInit {

  loading$ !: Observable<boolean | null>
  activeEmpresa$!: Observable<EmpresaResponse | null>
  form !: FormGroup;
  regexErrors = regexErrors;



  constructor(
    private store: Store<fromRoot.AppState>,
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private mapperService: MapperService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.activeEmpresa$ = this.store.select(getActiveEmpresa) as Observable<EmpresaResponse | null>


    this.form = this.fb.group({
      id: [null],
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

    this.store.pipe(select(getFormState))
      .subscribe(clienteForm => {
        if (clienteForm.nombre) {
          const value = clienteForm;
          this.form.patchValue(value);
          this.form.updateValueAndValidity();
          this.cdr.detectChanges();
        }
      })

    this.store.pipe(select(getCliente))
      .subscribe(cliente => {
        if (cliente) {
          const form = this.mapperService.clienteToForm(cliente);
          this.store.dispatch(ClienteActions.formSet({ form: form }));
        }
      })

    this.router.params.subscribe((param: Params) => {
      const id: string = param["id"];
      this.store.dispatch(ClienteActions.readStart({ clienteId: id }));
    })

  }


  onSubmit(): void {

    let empresaId!: string;

    this.activeEmpresa$.subscribe((data) => {
      if(data){
        return empresaId = data.id;
      }
      return empresaId = '';
    })

    if (this.form.valid) {
      this.loading$ = this.store.pipe(select(getLoading));

      this.router.params.subscribe((param: Params) => {

        const value = this.form.value;

        const cliente: ClienteRequest = {
          nombre: value.nombre,
          nif: value.nif,
          logo: value.logo,
          empresaId: empresaId
        }

        const id = param["id"];

        this.store.dispatch(ClienteActions.updateStart({
          clienteId: id,
          cliente: cliente }))

      })

    } else {
      markFormGroupTouched(this.form);
    }
  }


}
