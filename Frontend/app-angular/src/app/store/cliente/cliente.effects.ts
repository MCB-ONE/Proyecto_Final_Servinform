import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, exhaustMap, delay, tap, switchMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "environments/environment";
import { Router } from "@angular/router";
import { ClienteActions } from "./cliente.actions";
import { ClienteRequest, ClienteRequestResponse, Pagination} from "./cliente.models";

@Injectable()
export class ClienteEffects {

  readAll$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ClienteActions.readAllStart),
    exhaustMap(action =>
      this.httpClient.get<Pagination>(`${environment.url}/api/Cliente/empresa/${action.selectedEmpresaId}?${action.paramsUrl}`)
          .pipe(
            map((pagination: any) =>
            ClienteActions.readAllSuccess({ pagination }),
            ),
            catchError(error => of(ClienteActions.readAllError({ error })))
          )
    )
  )
);

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClienteActions.createStart),
      map((action) => action.cliente),
      switchMap((cliente: ClienteRequest) =>
        this.httpClient.post<ClienteRequestResponse>(`${environment.url}/api/Cliente`, cliente)
          .pipe(
            tap((cliente: ClienteRequestResponse) => {
              console.log(cliente)
              this.router.navigate(['/facturacion/welcome'])
            }),
            map((cliente: ClienteRequestResponse) => ClienteActions.createSuccess({ cliente }),
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
        this.httpClient.put<ClienteRequestResponse>(`${environment.url}/api/Cliente/actualizar/${action.clienteId}`, action.cliente)
          .pipe(
            tap((cliente: ClienteRequestResponse) => {
              this.router.navigate(['/facturacion/empresa'])
            }),
            map((cliente: ClienteRequestResponse) => ClienteActions.updateSuccess({ cliente }),
            ),
            catchError(error => of(ClienteActions.updateError({ error })))
          )
      )
    )
  );

  read$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ClienteActions.readStart),
    map((action) => action.clienteId),
    switchMap((id: string) =>
      this.httpClient.get<ClienteRequestResponse>(`${environment.url}/api/Cliente/${id}`)
        .pipe(
          map((cliente: ClienteRequestResponse) => ClienteActions.readSuccess({ cliente })
          ),
          catchError(error => of(ClienteActions.readError({ error })))
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
