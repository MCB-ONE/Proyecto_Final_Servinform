import { ActionReducerMap } from "@ngrx/store";
import * as fromUsuario from './usuario/index';
import { empresaReducer, EmpresaState } from "@app/store/empresa/empresa.reducer";
import { EmpresaEffects } from "@app/store/empresa/empresa.effects";

export interface AppState {
  //dictionaries: any;
  usuario: fromUsuario.UsuarioState;
  empresa: EmpresaState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  usuario: fromUsuario.reducer,
  empresa: empresaReducer
}

export const ROOT_EFFECTS = [
  fromUsuario.UsuarioEffects,
  EmpresaEffects
];
