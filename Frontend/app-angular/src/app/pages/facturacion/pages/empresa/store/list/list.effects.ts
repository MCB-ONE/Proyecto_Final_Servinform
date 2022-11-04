import { Pagination } from "./list.models";
import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { map, switchMap, catchError, delay, exhaustMap } from "rxjs/operators";
import { Router } from "@angular/router";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "environments/environment";
import { ReadEmpresas, ReadEmpresasError, ReadEmpresasSuccess } from "./list.actions";

@Injectable()
export class ListEffects {

  read$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReadEmpresas),
      exhaustMap(action =>
        this.httpClient.get<Pagination>(`${environment.url}/api/Empresa?${action.paramsUrl}`)
        .pipe(
          map((pagination: any) => ReadEmpresasSuccess({ pagination })),
          catchError(error => of(ReadEmpresasError({ error })))
        )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private httpClient: HttpClient
    ) { }

}
