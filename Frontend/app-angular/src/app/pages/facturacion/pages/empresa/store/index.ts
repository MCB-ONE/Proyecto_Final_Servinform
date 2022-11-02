import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { ListEffects } from './list';
import * as fromList from './list/list.reducer';

export interface EmpresasState{
  list: fromList.ListState
}

export const reducers: ActionReducerMap<EmpresasState> = {
  list: fromList.reducer
}

export const effects: any[] = [
  ListEffects
]

export const getEmpresasState = createFeatureSelector<EmpresasState>('empresas')
