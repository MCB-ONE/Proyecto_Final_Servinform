import { AppState } from "@app/store/app.state";
import { createSelector } from "@ngrx/store";
import { Pagination } from "./empresa.models";
import { EmpresaState } from "./empresa.reducer";

export const selectListFeature = (state: AppState) => state.empresa;

export const getPagination = createSelector(
  selectListFeature,
  (state: EmpresaState) => state.pagination
);

export const getEmpresas = createSelector(
  getPagination,
  (pagination: Pagination | null) => pagination?.data
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

export const getActiveEmpresaId = createSelector(
  selectListFeature,
  (state: EmpresaState) => state.activeEmpresaId
)

export const getEmpresa = createSelector(
  selectListFeature,
  (state: EmpresaState) => state.empresa
)


export const getActiveEmpresa = createSelector(
  getEmpresas,
  getActiveEmpresaId,
  (empresas, selectedId) => empresas?.find(e => e.id == selectedId)
)

