import { createReducer, on } from '@ngrx/store';
import { HttpParams } from "@angular/common/http";
import { EmpresaForm, Pagination } from './empresa.models';
import { EmpresaActions } from './empresa.actions';
import { Empresa } from '@app/models/backend';


export type FormState = EmpresaForm;

const initialFormSatate: FormState = {
  nombre: null,
  nif: null,
  logo: null,
  id: null,
  emailUsuario: null
};

export interface EmpresaState {
  pagination: Pagination | null;
  requestPagination: HttpParams | null;
  activeEmpresa: Empresa | null;
  empresa: Empresa | null;
  activeClienteId: string | null;
  form: FormState;
  loading: boolean | null;
  error: string | null;
}

const initialState: EmpresaState = {
  pagination: null,
  requestPagination: null,
  activeEmpresa: null,
  empresa: null,
  activeClienteId: null,
  form: initialFormSatate,
  loading: null,
  error: null,
};

export const empresaReducer = createReducer(
  initialState,
  on(EmpresaActions.readAllStart, (state, { requestPagination }) => {
    return {
      ...state,
      loading: true,
      error: null,
      requestPagination: requestPagination
    }
  }),
  on(EmpresaActions.readAllSuccess, (state, { pagination }) => {
    return {
      ...state,
      loading: false,
      pagination: pagination,
      error: null
    }
  }),
  on(EmpresaActions.readAllError, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error
    }
  }),
   // Obtener empresa por id
   on(EmpresaActions.readStart, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    }
  }),
  on(EmpresaActions.readSuccess, (state, { empresa }) => {
    return {
      ...state,
      loading: false,
      error: null,
      empresa: empresa
    }
  }),
  on(EmpresaActions.readError, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error,
      empresa: null
    }
  }),
  // Creacion
  on(EmpresaActions.createStart, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    }
  }),
  on(EmpresaActions.createSuccess, (state, { empresa }) => {
    return {
      ...state,
      loading: false,
      error: null,
      empresa: empresa
    }
  }),
  on(EmpresaActions.createError, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error,
      empresa: null
    }
  }),
  // Actualización
  on(EmpresaActions.updateStart, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    }
  }),
  on(EmpresaActions.updateSuccess, (state, { empresa }) => {
    return {
      ...state,
      loading: false,
      error: null,
      empresa: empresa
    }
  }),
  on(EmpresaActions.updateError, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error,
      empresa: null
    }
  }),
  // Obtener empresa activa
  on(EmpresaActions.readActiveStart, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    }
  }),
  on(EmpresaActions.readActiveSuccess, (state, { empresa }) => {
    return {
      ...state,
      loading: false,
      error: null,
      activeEmpresa: empresa
    }
  }),
  on(EmpresaActions.readActiveError, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error,
      activeEmpresa: null
    }
  }),
  on(EmpresaActions.changeActiveEmpresaStart, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(EmpresaActions.changeActiveEmpresaSuccess, (state, { empresa }) => {
    return {
      ...state,
      loading: false,
      activeEmpresa: empresa
    }
  }),
  on(EmpresaActions.changeActiveEmpresaError, (state, { error }) => {
    return {
      ...state,
      loading: false,
      activeEmpresa: null,
      error: error
    }
  }),
  // Formulario
  on(EmpresaActions.formSet, (state,  { form }) => {
    return {
      ...state,
      form: form
    }
  }),
  on(EmpresaActions.formUpdate, (state, { changes }) => {
    return {
      ...state,
      ...changes
    }
  }),
  on(EmpresaActions.formClear, (state) => {
    return {
      ...state
    }
  }),

  // Select active cliente
  on(EmpresaActions.selectActiveCliente, (state, { clienteId }) => {
    return {
      ...state,
      activeClienteId: clienteId
    }
  }),
)
