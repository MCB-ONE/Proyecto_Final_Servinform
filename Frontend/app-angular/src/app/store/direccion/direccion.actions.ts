import { HttpParams } from "@angular/common/http";
import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { DireccionCreateRequest, DireccionForm, DireccionResponse, DireccionUpdateRequest } from "./direccion.models";

export const DireccionActions = createActionGroup({
  source: 'Direccion',
  events: {

    // Get by id
    'Read start': props<{ direccionId: string }>(),
    'Read success': props<{ direccion: DireccionResponse }>(),
    'Read error': props<{ error: string }>(),

    // Seleccion direccion activa
    'Read active direccion':  props<{ direccionId: string }>(),

    // Creación
    'Create start': props<{ direccion: DireccionCreateRequest }>(),
    'Create success': props<{ direccion: DireccionResponse }>(),
    'Create error': props<{ error: string }>(),

    //Actualizacion
    'Update start': props<{ direccionId: string; direccion: DireccionUpdateRequest }>(),
    'Update success': props<{ direccion: DireccionResponse }>(),
    'Update error': props<{ error: string }>(),

    //Formulario
    'Form set': props<{ form: DireccionForm}>(),
    'Form update': props<{ changes: Partial<DireccionForm> }>(),
    'Form clear': emptyProps(),
  },
});
