import { AppState } from "@app/store/app.state";
import { createSelector } from "@ngrx/store";
import { ClienteState } from "./cliente.reducer";

export const selectClienteFeature = (state: AppState) => state.cliente;

export const getPagination = createSelector(
  selectClienteFeature,
  (state: ClienteState) => state.pagination
);

export const getPaginationRequest = createSelector(
  selectClienteFeature,
  (state: ClienteState) => state.requestPagination
);

export const getActiveClienteId = createSelector(
  selectClienteFeature,
  (state: ClienteState) => state.activeClienteId
);

export const getCliente = createSelector(
  selectClienteFeature,
  (state: ClienteState) => state.cliente
)

export const getLoading = createSelector(
  selectClienteFeature,
  (state: ClienteState) => state.loading
)

export const getError = createSelector(
  selectClienteFeature,
  (state: ClienteState) => state.error
)

export const getFormState = createSelector(
  selectClienteFeature,
  (state: ClienteState) => state.form
)
