import { Pagination } from "./list.models";
import { HttpParams } from "@angular/common/http";
import { createReducer, on } from "@ngrx/store";
import { ReadEmpresas, ReadEmpresasError, ReadEmpresasSuccess } from "./list.actions";

export interface ListState {
  pagination: Pagination | null;
  requestPagination: HttpParams | null;
  loading: boolean | null;
  error: string | null;
}

export const initialState: ListState = {
  pagination: null,
  requestPagination: null,
  loading: null,
  error: null
}

export const listReducer = createReducer(
  initialState,
  on(ReadEmpresas, (state, {requestPagination}) => {
    console.log(requestPagination);
    return {
      ...state,
      loading: true,
      error: null,
      requestPagination: requestPagination
     }
  }),
  on(ReadEmpresasSuccess, (state, {pagination}) => {
    console.log(pagination);
    return {
      ...state,
      loading: false,
      pagination: pagination,
      error: null
     }
  }),
  on(ReadEmpresasError, (state, {error}) => {
    return {
      ...state,
      loading: false,
      error: error
     }
  })

);
