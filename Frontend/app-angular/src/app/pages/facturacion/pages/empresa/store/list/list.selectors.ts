import { AppState } from "@app/store/app.state";
import { createSelector } from "@ngrx/store";
import {getEmpresasState, EmpresaState} from '../empresa.state';
import { ListState } from "./list.reducer";

export const selectListFeature = (state: AppState) => state.empresa;

export const getEmpresas = createSelector(
  selectListFeature,
  (state: ListState) => state.pagination
);

export const getPaginatioRequest = createSelector(
  selectListFeature,
  (state: ListState) => state.requestPagination
);

export const getLoading = createSelector(
  selectListFeature,
  (state: ListState) => state.loading
)
