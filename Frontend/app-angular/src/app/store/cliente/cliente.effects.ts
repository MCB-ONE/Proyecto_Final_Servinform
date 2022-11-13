import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, exhaustMap, delay, tap, switchMap } from "rxjs/operators";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "environments/environment";
import { Router } from "@angular/router";
import { ClienteActions } from "./cliente.actions";
import { ClienteEmpresa } from "./cliente.models";

@Injectable()
export class ClienteEffects {

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClienteActions.createStart),
      map((action) => action.cliente),
      switchMap((cliente: ClienteEmpresa) =>
        this.httpClient.post<ClienteEmpresa>(`${environment.url}/api/Cliente`, cliente)
          .pipe(
            tap((cliente: ClienteEmpresa) => {
              console.log(cliente)
              this.router.navigate(['/facturacion/welcome'])
            }),
            map((cliente: ClienteEmpresa) => ClienteActions.createSuccess({ cliente }),
            ),
            catchError(error => of(ClienteActions.createError({ error })))
          )
      )

    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClienteActions.updateStart),
      delay(3000),
      exhaustMap(action =>
        this.httpClient.put<ClienteEmpresa>(`${environment.url}/api/Cliente/actualizar/${action.clienteId}`, action.cliente)
          .pipe(
            tap((cliente: ClienteEmpresa) => {
              this.router.navigate(['/facturacion/empresa'])
            }),
            map((cliente: ClienteEmpresa) => ClienteActions.updateSuccess({ cliente }),
            ),
            catchError(error => of(ClienteActions.updateError({ error })))
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
