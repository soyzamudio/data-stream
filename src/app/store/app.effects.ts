import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from "./app.reducer";
import * as appActions from './app.actions';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  getAppData$ = createEffect(
    () => this.actions$.pipe(
      ofType(appActions.AppActionTypes.GET_APP_DATA),
      map(() => this.store.dispatch(new appActions.GetAppDataSuccess()))
    ), {
      dispatch: false,
    }
  );

  getAppDataSuccess$ = createEffect(
    () => this.actions$.pipe(
      ofType(appActions.AppActionTypes.GET_APP_DATA_SUCCESS),
      map(() => console.log('Success'))
    ), {
      dispatch: false,
    }
  );

  getAppDataFailure$ = createEffect(
    () => this.actions$.pipe(
      ofType(appActions.AppActionTypes.GET_APP_DATA_FAILURE),
      map(() => console.log('Failure'))
    ), {
      dispatch: false,
    }
  );

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
  ) {}

  // @Effect()
  // getAppData$ = this.actions$.pipe(
  //   ofType(appActions.AppActionTypes.GET_APP_DATA),
  //   map((action: appActions.GetAppData) => {
  //     this.store.dispatch(new appActions.GetAppDataSuccess());
  //   })
  // );

  // @Effect({ dispatch: false })
  // getAppDataSuccess$ = this.actions$.pipe(
  //   ofType(appActions.AppActionTypes.GET_APP_DATA_SUCCESS),
  //   map(() => console.log('Success'))
  // );

  // @Effect({ dispatch: false })
  // getAppDataFailure$ = this.actions$.pipe(
  //   ofType(appActions.AppActionTypes.GET_APP_DATA_FAILURE),
  //   map(() => console.log('Failure'))
  // );
}
