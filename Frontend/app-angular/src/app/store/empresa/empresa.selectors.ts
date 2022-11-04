import { HttpParams } from "@angular/common/http";
import { AppState } from "@app/store/app.state";
import { createSelector } from "@ngrx/store";
import { Pagination } from "./empresa.models";
import { EmpresaState } from "./empresa.reducer";

export const selectListFeature = (state: AppState) => state.empresa;

export const getEmpresas = createSelector(
  selectListFeature,
  (state: EmpresaState) => state.pagination
);

export const getPaginatioRequest = createSelector(
  selectListFeature,
  (state: EmpresaState) => state.requestPagination
);

export const getLoading = createSelector(
  selectListFeature,
  (state: EmpresaState) => state.loading
)

export const getError = createSelector(
  selectListFeature,
  (state: EmpresaState) => state.error
)
