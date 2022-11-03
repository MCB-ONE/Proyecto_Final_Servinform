import { createSelector } from "@ngrx/store";
import {getEmpresasState, EmpresasState} from '../index';
import { ListState } from "./list.reducer";

export const getListState = createSelector(
  getEmpresasState,
  (state: EmpresasState) => state.list
)


export const getEmpresas = createSelector(
  getListState,
  (state: ListState) => state.pagination
)


export const getPaginatioRequest = createSelector(
  getListState,
  (state: ListState) => state.requestPagination
)

export const getLoading = createSelector(
  getListState,
  (state: ListState) => state.loading
)
