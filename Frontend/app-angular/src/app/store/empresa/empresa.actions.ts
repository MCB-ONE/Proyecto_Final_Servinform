import { HttpParams } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { Pagination } from "./empresa.models";

export const ReadEmpresas = createAction(
  '[Empresa] Read: Start',
  props<{
    requestPagination: HttpParams; paramsUrl: string
  }>()
)

export const ReadEmpresasSuccess = createAction(
  '[Empresa] Read:Success',
  props<{pagination: Pagination | any}>()
)

export const ReadEmpresasError = createAction(
  '[Empresa] Read:Error',
  props<{error: string}>()
)
