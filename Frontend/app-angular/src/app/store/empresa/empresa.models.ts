import { Empresa as DbEmpresa } from '@app/models/backend/empresa';

export interface EmpresaResponse extends DbEmpresa{}

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
  data: EmpresaResponse[];
}

export { EmpresaForm } from '@app/pages/facturacion/pages/empresa/pages/update-empresa/update-empresa.component';


export type EmpresaCreateRequest = Omit<DbEmpresa, 'id' |'emailUsuario' | 'clientes' | 'direcciones'>;


export type EmpresaUpdateRequest = Omit<DbEmpresa, 'clientes' | 'direcciones'>;
