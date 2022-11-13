import { ActionReducerMap } from "@ngrx/store";
import * as fromUsuario from './usuario/index';
import { empresaReducer, EmpresaState } from "@app/store/empresa/empresa.reducer";
import { EmpresaEffects } from "@app/store/empresa/empresa.effects";
import { direccionReducer, DireccionState } from "./direccion/direccion.reducer";
import { DireccionEffects } from "./direccion/direccion.effects";
import { clienteReducer, ClienteState } from "./cliente/cliente.reducer";
import { ClienteEffects } from "./cliente/cliente.effects";

export interface AppState {
  //dictionaries: any;
  usuario: fromUsuario.UsuarioState;
  empresa: EmpresaState;
  direccion: DireccionState;
  cliente: ClienteState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  usuario: fromUsuario.reducer,
  empresa: empresaReducer,
  direccion: direccionReducer,
  cliente: clienteReducer
}

export const ROOT_EFFECTS = [
  fromUsuario.UsuarioEffects,
  EmpresaEffects,
  DireccionEffects,
  ClienteEffects
];
