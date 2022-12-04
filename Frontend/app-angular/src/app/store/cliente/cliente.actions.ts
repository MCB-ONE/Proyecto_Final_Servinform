import { HttpParams } from "@angular/common/http";
import { ClienteForm } from "@app/pages/facturacion/pages/cliente/pages/update-cliente/update-cliente.component";
import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ClienteRequest, ClienteRequestResponse, Pagination, SortParameters } from "./cliente.models";


export const ClienteActions = createActionGroup({
  source: 'Cliente',
  events: {

    // Get all
    'Read all start': props<{
      requestPagination: HttpParams;
      paramsUrl: string;
      selectedEmpresaId: string;
    }>(),
    'Read all success': props<{ pagination: Pagination | any }>(),
    'Read all error': props<{ error: string }>(),

    //Change Sort Params
    'Sort params change': props<{ sortParameters: SortParameters}>(),

    // Get by id
    'Read start': props<{ clienteId: string }>(),
    'Read success': props<{ cliente: ClienteRequestResponse }>(),
    'Read error': props<{ error: string }>(),

    // Seleccion cliente activo
    ' Select active cliente':  props<{ clienteId: string }>(),

    // Creación
    'Create start': props<{ cliente: ClienteRequest }>(),
    'Create success': props<{ cliente: ClienteRequestResponse }>(),
    'Create error': props<{ error: string }>(),

    //Actualizacion
    'Update start': props<{ clienteId: string; cliente: ClienteRequest }>(),
    'Update success': props<{ cliente: ClienteRequestResponse }>(),
    'Update error': props<{ error: string }>(),

    //Formulario
    'Form set': props<{ form: ClienteForm}>(),
    'Form update': props<{ changes: Partial<ClienteForm> }>(),
    'Form clear': emptyProps(),
  },
});
