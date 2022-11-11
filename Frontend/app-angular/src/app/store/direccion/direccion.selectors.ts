import { AppState } from "@app/store/app.state";
import { createSelector } from "@ngrx/store";
import { DireccionState } from "./direccion.reducer";

export const selectDireccionFeature = (state: AppState) => state.direccion;

export const getActiveDireccionId = createSelector(
  selectDireccionFeature,
  (state: DireccionState) => state.activeDireccionId
);

export const getDireccion = createSelector(
  selectDireccionFeature,
  (state: DireccionState) => state.direccion
)

export const getLoading = createSelector(
  selectDireccionFeature,
  (state: DireccionState) => state.loading
)

export const getError = createSelector(
  selectDireccionFeature,
  (state: DireccionState) => state.error
)

export const getFormState = createSelector(
  selectDireccionFeature,
  (state: DireccionState) => state.form
)
