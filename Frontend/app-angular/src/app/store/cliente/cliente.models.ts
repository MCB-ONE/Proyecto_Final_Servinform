import { Sort } from '@angular/material/sort';
import { Cliente as DbCliente } from '@app/models/backend/cliente';

export interface ClienteResponse extends DbCliente{};

export interface ClienteRequestResponse extends DbCliente{};

export type ClienteRequest = Omit<DbCliente, 'id' | 'direcciones'>

export interface PaginationRequest{
  pageIndex: number | null;
  pageSize: number | null;
  search: string | null;
  sort: number | null;
}

export interface Pagination{
  pageIndex: number;
  pageSize: number;
  count: number;
  pageCount: number;
  data: ClienteResponse[];
}

export { ClienteForm } from '@app/pages/facturacion/pages/cliente/pages/update-cliente/update-cliente.component';


export interface SortParameters extends Sort{};
