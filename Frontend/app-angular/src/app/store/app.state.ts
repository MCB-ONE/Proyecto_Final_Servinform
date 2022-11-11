import { ActionReducerMap } from "@ngrx/store";
import * as fromUsuario from './usuario/index';
import { empresaReducer, EmpresaState } from "@app/store/empresa/empresa.reducer";
import { EmpresaEffects } from "@app/store/empresa/empresa.effects";
import { direccionReducer, DireccionState } from "./direccion/direccion.reducer";
import { DireccionEffects } from "./direccion/direccion.effects";

export interface AppState {
  //dictionaries: any;
  usuario: fromUsuario.UsuarioState;
  empresa: EmpresaState;
  direccion: DireccionState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  usuario: fromUsuario.reducer,
  empresa: empresaReducer,
  direccion: direccionReducer
}

export const ROOT_EFFECTS = [
  fromUsuario.UsuarioEffects,
  EmpresaEffects,
  DireccionEffects
];
