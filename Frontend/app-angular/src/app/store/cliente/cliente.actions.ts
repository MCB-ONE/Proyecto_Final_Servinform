import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ClienteEmpresa } from "./cliente.models";

export const ClienteActions = createActionGroup({
  source: 'Cliente',
  events: {

    // Seleccion cliente activo
    'Read active cliente':  props<{ clienteId: string }>(),

    // Creación
    'Create start': props<{ cliente: ClienteEmpresa }>(),
    'Create success': props<{ cliente: ClienteEmpresa }>(),
    'Create error': props<{ error: string }>(),

    //Actualizacion
    'Update start': props<{ clienteId: string; cliente: ClienteEmpresa }>(),
    'Update success': props<{ cliente: ClienteEmpresa }>(),
    'Update error': props<{ error: string }>(),

    //Formulario
    // 'Form set': props<{ form: ClienteForm}>(),
    // 'Form update': props<{ changes: Partial<ClienteForm> }>(),
    // 'Form clear': emptyProps(),
  },
});
