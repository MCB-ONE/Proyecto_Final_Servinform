import { createReducer, on } from '@ngrx/store';
import { Direccion } from '@app/models/backend';
import { ClienteActions } from './cliente.actions';
import { ClienteEmpresa } from './cliente.models';


//export type FormState = DireccionForm;

// const initialFormSatate: FormState = {
//   id: null,
//   empresaId: null,
//   calle: null,
//   numero: null,
//   codigoPostal: null,
//   ciudad: null,
//   provincia: null,
//   pais: null,
//   telefono: null,
//   email: null,
//   web: null
// };

export interface ClienteState {
  activeClienteId: string | null;
  cliente: ClienteEmpresa | null;
  //form: FormState;
  loading: boolean | null;
  error: string | null;
}

const initialState: ClienteState = {
  activeClienteId: null,
  cliente: null,
  loading: null,
  error: null,
  //form: initialFormSatate
};

export const clienteReducer = createReducer(
  initialState,
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
  // on(ClienteActions.formSet, (state,  { form }) => {
  //   return {
  //     ...state,
  //     form: form
  //   }
  // }),
  // on(ClienteActions.formUpdate, (state, { changes }) => {
  //   return {
  //     ...state,
  //     ...changes
  //   }
  // }),
  // on(ClienteActions.formClear, (state) => {
  //   return {
  //     ...state
  //   }
  // }),
)
