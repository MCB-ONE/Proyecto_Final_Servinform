import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, exhaustMap, delay, tap, switchMap } from "rxjs/operators";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "environments/environment";
import { Router } from "@angular/router";
import { DireccionActions } from "./direccion.actions";
import { DireccionCreateRequest, DireccionResponse } from "./direccion.models";

@Injectable()
export class DireccionEffects {

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DireccionActions.createStart),
      map((action) => action.direccion),
      switchMap((direccion: DireccionCreateRequest) =>
        this.httpClient.post<DireccionResponse>(`${environment.url}/api/DireccionEmpresa`, direccion)
          .pipe(
            tap((direccion: DireccionResponse) => {
              console.log(direccion)
              this.router.navigate(['/facturacion/empresa'])
            }),
            map((direccion: DireccionResponse) => DireccionActions.createSuccess({ direccion }),
            ),
            catchError(error => of(DireccionActions.createError({ error })))
          )
      )

    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DireccionActions.updateStart),
      delay(3000),
      exhaustMap(action =>
        this.httpClient.put<DireccionResponse>(`${environment.url}/api/DireccionEmpresa/actualizar/${action.direccionId}`, action.direccion)
          .pipe(
            tap((direccion: DireccionResponse) => {
              this.router.navigate(['/facturacion/empresa'])
            }),
            map((direccion: DireccionResponse) => DireccionActions.updateSuccess({ direccion }),
            ),
            catchError(error => of(DireccionActions.updateError({ error })))
          )
      )
    )
  );

  read$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DireccionActions.readStart),
      map((action) => action.direccionId),
      switchMap((id: string) =>
        this.httpClient.get<DireccionResponse>(`${environment.url}/api/DireccionEmpresa/${id}`)
          .pipe(
            map((direccion: DireccionResponse) => DireccionActions.readSuccess({ direccion })
            ),
            catchError(error => of(DireccionActions.readError({ error })))
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
