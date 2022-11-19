import { AppState } from "@app/store/app.state";
import { createSelector } from "@ngrx/store";
import { Pagination } from "./empresa.models";
import { EmpresaState } from "./empresa.reducer";

export const selectEmpresaFeature = (state: AppState) => state.empresa;

export const getPagination = createSelector(
  selectEmpresaFeature,
  (state: EmpresaState) => state.pagination
);

export const getEmpresas = createSelector(
  getPagination,
  (pagination: Pagination | null) => pagination?.data
);

export const getPaginatioRequest = createSelector(
  selectEmpresaFeature,
  (state: EmpresaState) => state.requestPagination
);

export const getEmpresa = createSelector(
  selectEmpresaFeature,
  (state: EmpresaState) => state.empresa
)

export const getLoading = createSelector(
  selectEmpresaFeature,
  (state: EmpresaState) => state.loading
)

export const getError = createSelector(
  selectEmpresaFeature,
  (state: EmpresaState) => state.error
)

export const getFormState = createSelector(
  selectEmpresaFeature,
  (state: EmpresaState) => state.form
)

export const empresaExist = (id: string)  => createSelector(
  getEmpresas,
  (empresas): boolean => {
    if(empresas != undefined){
      return empresas.some(empresa => empresa.id == id);
    }
    return false;
  }
)

export const getActiveEmpresa = createSelector(
  selectEmpresaFeature,
  (state: EmpresaState) => state.activeEmpresa
)

export const getActiveClienteId = createSelector(
  selectEmpresaFeature,
  (state: EmpresaState) => state.activeClienteId
)

export const getActiveCliente = createSelector(
  getActiveEmpresa,
  getActiveClienteId,
  (empresa, selectedId) => {
    empresa?.clientes?.find(c => c.id == selectedId)
  }
)
