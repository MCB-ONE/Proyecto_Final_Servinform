import { AppState } from "@app/store/app.state";
import { createSelector } from "@ngrx/store";
import { ClienteState } from "./cliente.reducer";

export const selectClienteFeature = (state: AppState) => state.cliente;

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

// export const getFormState = createSelector(
//   selectClienteFeature,
//   (state: DireccionState) => state.form
// )
