import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { markFormGroupTouched, regex, regexErrors } from '@app/shared/utils';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store/app.state';
import { getDireccion, getFormState, getLoading } from '@app/store/direccion/direccion.selectors';
import { DireccionCreateRequest, DireccionUpdateRequest } from '@app/store/direccion/direccion.models';
import { DireccionActions } from '@app/store/direccion/direccion.actions';
import { getActiveEmpresaId } from '@app/store/empresa/empresa.selectors';
import { ActivatedRoute, Params } from '@angular/router';
import { MapperService } from '../../service';

export interface DireccionForm {
  id: string | null;
  empresaId: string | null;
  calle: string | null;
  numero: number | null;
  codigoPostal: string | null;
  ciudad: string | null;
  provincia: string | null;
  pais: string | null;
  telefono: number | null;
  email: string | null;
  web: string | null;
}

@Component({
  selector: 'app-update-direccion',
  templateUrl: './update-direccion.component.html',
  styleUrls: ['./update-direccion.component.scss']
})
export class UpdateDireccionComponent implements OnInit {


  loading$ !: Observable<boolean | null>
  form !: FormGroup;
  regexErrors = regexErrors;
  empresaId$ !: Observable<string | null>



  constructor(
    private store: Store<fromRoot.AppState>,
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private mapperService: MapperService,
    private cdr: ChangeDetectorRef
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

    this.store.pipe(select(getFormState))
    .subscribe(direccionForm => {
      if (direccionForm.calle) {
        const value = direccionForm;
        this.form.patchValue(value);
        this.form.updateValueAndValidity();
        this.cdr.detectChanges();
      }
    })

    this.store.pipe(select(getDireccion))
    .subscribe(direccion => {
      if (direccion) {
        const form = this.mapperService.direccionToForm(direccion);
        this.store.dispatch(DireccionActions.formSet({ form: form }));
      }
    })

    this.router.params.subscribe((param: Params) => {
      const id: string = param["id"];
      this.store.dispatch(DireccionActions.readStart({ direccionId: id }));
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
      this.router.params.subscribe((param: Params) => {

        const value = this.form.value;

        const direccion: DireccionUpdateRequest = {
          empresaId: empresaId,
          calle: value.calle,
          numero: value.numero,
          codigoPostal: value.codigoPostal,
          ciudad: value.ciudad,
          provincia: value.provincia,
          pais: value.pais,
          telefono: value.telefono,
          email: value.email,
          web: value.web,

        }

        const id = param["id"];

        this.store.dispatch(DireccionActions.updateStart({
          direccionId: id,
          direccion: direccion }))

      })
    }else{
      markFormGroupTouched(this.form);
    }
  }



}
