import { HttpParams } from "@angular/common/http";
import { createAction, createActionGroup, props } from "@ngrx/store";
import { EmpresaCreateRequest, EmpresaResponse, EmpresaUpdateRequest, Pagination } from "./empresa.models";


export const EmpresaActions = createActionGroup({
  source: 'Empresa',
  events: {
    'Read all start': props<{
      requestPagination: HttpParams;
      paramsUrl: string
    }>(),
    'Read all success': props<{ pagination: Pagination | any }>(),
    'Read all error':  props<{ error: string }>(),
    // Get by id y seleccion empresa activa
    'Read start': props<{ empresaId: string }>(),
    'Read success': props<{ empresa: EmpresaResponse }>(),
    'Read error': props<{ error: string }>(),
    'Read active empresa':  props<{ empresaId: string }>(),
    // Creación
    'Create start': props<{ empresa: EmpresaCreateRequest }>(),
    'Create success': props<{ empresa: EmpresaResponse }>(),
    'Create error': props<{ error: string }>(),
    //Actualizacion
    'Update start': props<{ empresaId: string, empresa: EmpresaUpdateRequest }>(),
    'Update success': props<{ empresa: EmpresaResponse }>(),
    'Update error': props<{ error: string }>(),
  },
});
