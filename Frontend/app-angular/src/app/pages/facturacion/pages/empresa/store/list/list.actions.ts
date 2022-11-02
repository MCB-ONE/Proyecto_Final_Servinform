import { HttpParams } from "@angular/common/http";
import { Action } from "@ngrx/store";
import { Pagination } from "./list.models";


export enum Types {
  READ = '[Empresa] Read: Start',
  READ_SUCCESS = '[Empresa] Read: Authorized',
  READ_ERROR = '[Empresa] Read: Error',
}


export class Read implements Action {
  readonly type = Types.READ;
  constructor(public requestPagination: HttpParams, public paramsUrl: string){};
}

export class ReadSuccess implements Action {
  readonly type = Types.READ_SUCCESS;
  constructor(public pagination: Pagination | any){};
}

export class ReadError implements Action {
  readonly type = Types.READ_ERROR;
  constructor(public error: string){};
}

export type All = Read | ReadSuccess | ReadError;
