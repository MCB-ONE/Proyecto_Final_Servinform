import { Pagination } from "./list.models";
import * as fromActions from './list.actions';
import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { map, switchMap, catchError, take, tap, delay } from "rxjs/operators";
import { Router } from "@angular/router";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "environments/environment";

type Action = fromActions.All;

@Injectable()
export class ListEffects {

  constructor(private actions: Actions, private httpClient: HttpClient) { }

  read: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.READ),
      map((action: fromActions.Read) => action.paramsUrl),
      switchMap((request: string) =>
        this.httpClient.get<Pagination>(`${environment.url}/api/Empresa?${request}`)
          .pipe(
            delay(1000),
            map((pagination: any) => new fromActions.ReadSuccess(pagination)),
            catchError(err => of(new fromActions.ReadError(err.message)))
          )
      )
    )
  );
}
