import { HttpParams } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { EmpresaCreateRequest, EmpresaResponse, EmpresaUpdateRequest, Pagination } from "./empresa.models";

export const ReadEmpresas = createAction(
  '[Empresa] Read: Start',
  props<{
    requestPagination: HttpParams; paramsUrl: string
  }>()
)

export const ReadEmpresasSuccess = createAction(
  '[Empresa] Read:Success',
  props<{ pagination: Pagination | any }>()
)

export const ReadEmpresasError = createAction(
  '[Empresa] Read:Error',
  props<{ error: string }>()
)

export const ReadActiveEmpresa = createAction(
  '[Empresa] Read:Error',
  props<{ empresaId: string }>()
)

// Acciones para la creacion
export const CreateEmpresa = createAction(
  '[Empresa] Create:Start',
  props<{ empresa: EmpresaCreateRequest }>()
)

export const CreateEmpresaSuccess = createAction(
  '[Empresa] Create:Success',
  props<{ empresa: EmpresaResponse }>()
)


export const CreateEmpresaError = createAction(
  '[Empresa] Create:Error',
  props<{ error: string }>()
)


// Acciones para la actualización
export const UpdateEmpresa = createAction(
  '[Empresa] Update:Start',
  props<{ empresaId: string, empresa: EmpresaUpdateRequest }>()
)

export const UpdateEmpresaSuccess = createAction(
  '[Empresa] Update:Success',
  props<{ empresa: EmpresaResponse }>()
)


export const UpdateEmpresaError = createAction(
  '[Empresa] Update:Error',
  props<{ error: string }>()
)

// Acciones para obtener empresa por id
export const ReadEmpresa = createAction(
  '[Empresa] Read:Start',
  props<{ empresaId: string }>()
)

export const ReadEmpresaSuccess = createAction(
  '[Empresa] Update:Success',
  props<{ empresa: EmpresaResponse }>()
)


export const ReadEmpresaError = createAction(
  '[Empresa] Update:Error',
  props<{ error: string }>()
)

