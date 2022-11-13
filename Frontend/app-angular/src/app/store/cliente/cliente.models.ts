import { Cliente as DbCliente } from '@app/models/backend/cliente';

export type ClienteEmpresa = Omit<DbCliente, 'id'>
