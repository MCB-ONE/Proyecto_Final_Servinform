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
      map((action) => action.paramsUrl),
      switchMap((request: string) =>
        this.httpClient.get<Pagination>(`${environment.url}/api/Empresa?${request}`)
          .pipe(
            map((pagination: any) =>
              EmpresaActions.readAllSuccess({ pagination }),
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
            tap((empresa: EmpresaResponse) => {
              this.router.navigate(['/facturacion/empresa'])
            }),
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
      map((action) => action.empresaId),
      switchMap((id: string) =>
        this.httpClient.get<EmpresaResponse>(`${environment.url}/api/Empresa/${id}`)
          .pipe(
            map((empresa: EmpresaResponse) => EmpresaActions.readSuccess({ empresa })
            ),
            catchError(error => of(EmpresaActions.readError({ error })))
          )
      )
    )
  );

  readActive$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmpresaActions.readActiveStart),
      switchMap(() =>
        this.httpClient.get<EmpresaResponse>(`${environment.url}/api/Empresa/active`)
          .pipe(
            map((empresa: EmpresaResponse) => EmpresaActions.readActiveSuccess({ empresa }),
            ),
            catchError(error => of(EmpresaActions.readActiveError({ error })))
          )
      )
    )
  );

  changeActive$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmpresaActions.changeActiveEmpresaStart),
      map((action) => action.empresaId),
      switchMap((id: string) =>
        this.httpClient.put<EmpresaResponse>(`${environment.url}/api/Empresa/activate/${id}`, null)
          .pipe(
            tap(() => {
              this.router.navigate(['/facturacion/welcome'])
            }),
            map((empresa: EmpresaResponse) => EmpresaActions.changeActiveEmpresaSuccess({ empresa })
            ),
            catchError(error => of(EmpresaActions.changeActiveEmpresaError({ error })))
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
