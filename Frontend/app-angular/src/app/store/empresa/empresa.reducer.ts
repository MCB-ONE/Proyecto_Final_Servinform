import { createReducer, on } from '@ngrx/store';
import { HttpParams } from "@angular/common/http";
import { Pagination } from './empresa.models';
import { ReadEmpresas, ReadEmpresasError, ReadEmpresasSuccess } from './empresa.actions';


export interface EmpresaState{
  pagination: Pagination | null;
  requestPagination: HttpParams | null;
  activeEmpresaId: number | null;
  loading: boolean | null;
  error: string | null;
}

const initialState: EmpresaState = {
  pagination: null,
  requestPagination: null,
  activeEmpresaId: null,
  loading: null,
  error: null
};

export const empresaReducer = createReducer(
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
)
