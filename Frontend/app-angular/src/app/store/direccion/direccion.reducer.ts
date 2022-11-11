import { createReducer, on } from '@ngrx/store';
import { HttpParams } from "@angular/common/http";
import { Direccion } from '@app/models/backend';
import { DireccionActions } from './direccion.actions';
import { DireccionForm } from './direccion.models';


export type FormState = DireccionForm;

const initialFormSatate: FormState = {
  id: null,
  empresaId: null,
  calle: null,
  numero: null,
  codigoPostal: null,
  ciudad: null,
  provincia: null,
  pais: null,
  telefono: null,
  email: null,
  web: null
};

export interface DireccionState {
  activeDireccionId: string | null;
  direccion: Direccion | null;
  form: FormState;
  loading: boolean | null;
  error: string | null;
}

const initialState: DireccionState = {
  activeDireccionId: null,
  direccion: null,
  loading: null,
  error: null,
  form: initialFormSatate
};

export const direccionReducer = createReducer(
  initialState,
  on(DireccionActions.readActiveDireccion, (state, { direccionId }) => {
    return {
      ...state,
      activeDireccionId: direccionId
    }
  }),
  // Creacion
  on(DireccionActions.createStart, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    }
  }),
  on(DireccionActions.createSuccess, (state, { direccion }) => {
    return {
      ...state,
      loading: false,
      error: null,
      direccion: direccion
    }
  }),
  on(DireccionActions.createError, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error,
      direccion: null
    }
  }),
  // Actualización
  on(DireccionActions.updateStart, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    }
  }),
  on(DireccionActions.updateSuccess, (state, { direccion }) => {
    return {
      ...state,
      loading: false,
      error: null,
      direccion: direccion
    }
  }),
  on(DireccionActions.updateError, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error,
      direccion: null
    }
  }),
  // Obtener empresa por id
  on(DireccionActions.readStart, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    }
  }),
  on(DireccionActions.readSuccess, (state, { direccion }) => {
    return {
      ...state,
      loading: false,
      error: null,
      direccion: direccion
    }
  }),
  on(DireccionActions.readError, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error,
      direccion: null
    }
  }),
  // Formulario
  on(DireccionActions.formSet, (state,  { form }) => {
    return {
      ...state,
      form: form
    }
  }),
  on(DireccionActions.formUpdate, (state, { changes }) => {
    return {
      ...state,
      ...changes
    }
  }),
  on(DireccionActions.formClear, (state) => {
    return {
      ...state
    }
  }),
)
