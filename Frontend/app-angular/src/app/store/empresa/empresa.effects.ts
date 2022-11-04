import { Pagination } from "./empresa.models";
import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, exhaustMap, delay } from "rxjs/operators";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "environments/environment";
import { ReadEmpresas, ReadEmpresasError, ReadEmpresasSuccess } from "./empresa.actions";

@Injectable()
export class EmpresaEffects {

  read$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReadEmpresas),
      // delay(3000),
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
