import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { map } from 'rxjs/operators';
import * as appActions from './app.actions';
import { AppState } from "./app.reducer";

@Injectable()
export class AppEffects {
  getAppData$ = createEffect(
    () => this.actions$.pipe(
      ofType(appActions.AppActionTypes.GET_APP_DATA),
      map((msg: appActions.GetAppData) => this.store.dispatch(new appActions.GetAppDataSuccess(msg.payload))),
    ), {
      dispatch: false,
    }
  );

  // getAppDataSuccess$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType(appActions.AppActionTypes.GET_APP_DATA_SUCCESS),
  //     map(() => console.log('Success'))
  //   ), {
  //     dispatch: false,
  //   }
  // );

  // getAppDataFailure$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType(appActions.AppActionTypes.GET_APP_DATA_FAILURE),
  //     map(() => console.log('Failure'))
  //   ), {
  //     dispatch: false,
  //   }
  // );

  setFilter$ = createEffect(
    () => this.actions$.pipe(
      ofType(appActions.AppActionTypes.SET_DATA_FILTER),
      map((action: appActions.SetDataFilter) => this.store.dispatch(new appActions.SetDataFilterSuccess(action.payload)))
    ), {
      dispatch: false,
    }
  );

  setFilterSuccess$ = createEffect(
    () => this.actions$.pipe(
      ofType(appActions.AppActionTypes.SET_DATA_FILTER_SUCCESS),
      map(() => console.log('Filter Success'))
    ), {
      dispatch: false,
    }
  );

  removeFilter$ = createEffect(
    () => this.actions$.pipe(
      ofType(appActions.AppActionTypes.REMOVE_DATA_FILTER),
      map((action: appActions.RemoveDataFilter) => {
        console.log(action.payload)
        this.store.dispatch(new appActions.RemoveDataFilterSuccess(action.payload))
      })
    ), {
      dispatch: false,
    }
  )

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
  ) {}
}
