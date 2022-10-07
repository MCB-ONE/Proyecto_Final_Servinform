import { ActionReducerMap } from "@ngrx/store";
import * as fromUsuario from './usuario/index';

export interface State {
  usuario: fromUsuario.UsuarioState;
}

export const reducer: ActionReducerMap<State> = {
  usuario: fromUsuario.reducer,
}

export const effects = [
  fromUsuario.UsuarioEffects,
];
