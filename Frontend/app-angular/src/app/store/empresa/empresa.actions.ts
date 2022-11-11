import { HttpParams } from "@angular/common/http";
import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { EmpresaCreateRequest, EmpresaForm, EmpresaResponse, EmpresaUpdateRequest, Pagination } from "./empresa.models";


export const EmpresaActions = createActionGroup({
  source: 'Empresa',
  events: {
    // Get all
    'Read all start': props<{
      requestPagination: HttpParams;
      paramsUrl: string
    }>(),
    'Read all success': props<{ pagination: Pagination | any }>(),
    'Read all error':  props<{ error: string }>(),

    // Get by id
    'Read start': props<{ empresaId: string }>(),
    'Read success': props<{ empresa: EmpresaResponse }>(),
    'Read error': props<{ error: string }>(),

    // Seleccion empresa activa
    'Read active empresa':  props<{ empresaId: string }>(),

    // Creación
    'Create start': props<{ empresa: EmpresaCreateRequest }>(),
    'Create success': props<{ empresa: EmpresaResponse }>(),
    'Create error': props<{ error: string }>(),

    //Actualizacion
    'Update start': props<{ empresaId: string; empresa: EmpresaUpdateRequest }>(),
    'Update success': props<{ empresa: EmpresaResponse }>(),
    'Update error': props<{ error: string }>(),

    //Formulario
    'Form set': props<{ form: EmpresaForm}>(),
    'Form update': props<{ changes: Partial<EmpresaForm> }>(),
    'Form clear': emptyProps(),
  },
});
