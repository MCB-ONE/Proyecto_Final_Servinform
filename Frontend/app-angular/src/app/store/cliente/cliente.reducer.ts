import { createReducer, on } from '@ngrx/store';
import { Direccion } from '@app/models/backend';
import { ClienteActions } from './cliente.actions';
import { ClienteForm, ClienteResponse, Pagination, SortParameters } from './cliente.models';
import { HttpParams } from '@angular/common/http';


export type FormState = ClienteForm;

const initialFormSatate: FormState = {
  id: null,
  empresaId: null,
  nombre: null,
  nif: null,
  logo: null
};

export interface ClienteState {
  activeClienteId: string | null;
  pagination: Pagination | null;
  requestPagination: HttpParams | null;
  sortParameters: SortParameters | null;
  cliente: ClienteResponse | null;
  form: FormState;
  loading: boolean | null;
  error: string | null;
}

const initialState: ClienteState = {
  pagination: null,
  requestPagination: null,
  activeClienteId: null,
  cliente: null,
  loading: null,
  error: null,
  sortParameters: null,
  form: initialFormSatate
};

export const clienteReducer = createReducer(
  initialState,
  // Read All
  on(ClienteActions.readAllStart, (state, { requestPagination }) => {
    return {
      ...state,
      loading: true,
      error: null,
      requestPagination: requestPagination
    }
  }),
  on(ClienteActions.readAllSuccess, (state, { pagination }) => {
    return {
      ...state,
      loading: false,
      pagination: pagination,
      error: null
    }
  }),
  on(ClienteActions.readAllError, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error
    }
  }),
    //Change Sort Params
    on(ClienteActions.sortParamsChange, (state, { sortParameters }) => {
      return {
        ...state,
        loading: false,
        sortParameters: sortParameters
      }
    }),

    // Obtener cliente por id
    on(ClienteActions.readStart, (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      }
    }),
    on(ClienteActions.readSuccess, (state, { cliente }) => {
      return {
        ...state,
        loading: false,
        error: null,
        cliente: cliente
      }
    }),
    on(ClienteActions.readError, (state, { error }) => {
      return {
        ...state,
        loading: false,
        error: error,
        cliente: null
      }
    }),

  // Select cliente activo
  on(ClienteActions.readActiveCliente, (state, { clienteId }) => {
    return {
      ...state,
      activeClienteId: clienteId
    }
  }),
  // Creacion
  on(ClienteActions.createStart, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    }
  }),
  on(ClienteActions.createSuccess, (state, { cliente }) => {
    return {
      ...state,
      loading: false,
      error: null,
      cliente: cliente
    }
  }),
  on(ClienteActions.createError, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error,
      direccion: null
    }
  }),
  // Actualización
  on(ClienteActions.updateStart, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    }
  }),
  on(ClienteActions.updateSuccess, (state, { cliente }) => {
    return {
      ...state,
      loading: false,
      error: null,
      cliente: cliente
    }
  }),
  on(ClienteActions.updateError, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error,
      cliente: null
    }
  }),
  // Formulario
  on(ClienteActions.formSet, (state,  { form }) => {
    return {
      ...state,
      form: form
    }
  }),
  on(ClienteActions.formUpdate, (state, { changes }) => {
    return {
      ...state,
      ...changes
    }
  }),
  on(ClienteActions.formClear, (state) => {
    return {
      ...state
    }
  }),
)
