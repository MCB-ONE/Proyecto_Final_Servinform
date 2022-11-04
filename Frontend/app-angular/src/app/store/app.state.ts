import { ActionReducerMap } from "@ngrx/store";
import * as fromUsuario from './usuario/index';
import { ListEffects, listReducer, ListState } from "../pages/facturacion/pages/empresa/store/list";

export interface AppState {
  //dictionaries: any;
  usuario: fromUsuario.UsuarioState;
  empresa: ListState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  usuario: fromUsuario.reducer,
  empresa: listReducer,
}

// export const reducers: ActionReducerMap<State> = {
//   usuario: fromUsuario.reducer,
//   empresa: listReducer,
// }

export const effects = [
  fromUsuario.UsuarioEffects,
  ListEffects
];
