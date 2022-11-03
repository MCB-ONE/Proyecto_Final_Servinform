import { ActionReducerMap } from "@ngrx/store";
import * as fromUsuario from './usuario/index';
import * as fromEmpresa from './empresa/list/index';

export interface State {
  //dictionaries: any;
  usuario: fromUsuario.UsuarioState;
  empresa: fromEmpresa.ListState;
}

export const reducers: ActionReducerMap<State> = {
  usuario: fromUsuario.reducer,
  empresa: fromEmpresa.reducer,
}

export const effects = [
  fromUsuario.UsuarioEffects,
  fromEmpresa.ListEffects
];
