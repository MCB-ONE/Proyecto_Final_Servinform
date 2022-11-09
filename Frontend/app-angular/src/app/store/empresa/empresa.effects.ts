import { EmpresaResponse, Pagination } from "./empresa.models";
import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, exhaustMap, delay, tap, switchMap } from "rxjs/operators";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "environments/environment";
import { EmpresaActions } from "./empresa.actions";
import { Router } from "@angular/router";

@Injectable()
export class EmpresaEffects {

  readAll$ = createEffect(() =>
  this.actions$.pipe(
    ofType(EmpresaActions.readAllStart),
    map(( action) => action.paramsUrl),
    switchMap((request: string) =>
      this.httpClient.get<Pagination>(`${environment.url}/api/Empresa?${request}`)
        .pipe(
          map((pagination: any) => EmpresaActions.readAllSuccess({ pagination }),
          ),
          catchError(error => of(EmpresaActions.readAllError({ error })))
        )
    )
  )
);

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmpresaActions.createStart),
      exhaustMap(action =>
        this.httpClient.post<EmpresaResponse>(`${environment.url}/api/Empresa`, action.empresa)
          .pipe(
            tap((empresa: EmpresaResponse) => {
              this.router.navigate(['/facturacion/empresa'])
            }),
            map((empresa: EmpresaResponse) => EmpresaActions.createSuccess({ empresa }),
            ),
            catchError(error => of(EmpresaActions.createError({ error })))
          )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmpresaActions.updateStart),
      delay(3000),
      exhaustMap(action =>
        this.httpClient.put<EmpresaResponse>(`${environment.url}/api/Empresa/actualizar/${action.empresaId}`, action.empresa)
          .pipe(
            map((empresa: EmpresaResponse) => EmpresaActions.updateSuccess({ empresa }),
            ),
            catchError(error => of(EmpresaActions.updateError({ error })))
          )
      )
    )
  );

  read$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmpresaActions.readStart),
      delay(3000),
      exhaustMap(action =>
        this.httpClient.get<EmpresaResponse>(`${environment.url}/api/Empresa/actualizar/${action.empresaId}`)
          .pipe(
            map((empresa: EmpresaResponse) => EmpresaActions.readSuccess({ empresa }),
            ),
            catchError(error => of(EmpresaActions.readError({ error })))
          )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private router: Router
  ) { }

}
