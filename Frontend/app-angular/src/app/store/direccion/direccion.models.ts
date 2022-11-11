import { Direccion as DbDireccion } from '@app/models/backend/direccion';

export interface DireccionResponse extends DbDireccion{}

export type DireccionCreateRequest = Omit<DbDireccion, 'id'>

export { DireccionForm } from '@app/pages/facturacion/pages/empresa/pages/update-direccion/update-direccion.component';

export type DireccionUpdateRequest = Omit<DbDireccion, 'id'>
