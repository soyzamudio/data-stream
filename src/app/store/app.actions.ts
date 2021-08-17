import { Action } from '@ngrx/store';
import { TwitterData } from './../shared/services/pubnub.service';

export enum AppActionTypes {
  GET_APP_DATA = '[App] Get App Data',
  GET_APP_DATA_SUCCESS = '[App] Get App Data Success',
  GET_APP_DATA_FAILURE = '[App] Get App Data Failure',

  SET_DATA_FILTER = '[App] Set Data Filter',
  SET_DATA_FILTER_SUCCESS = '[App] Set Data Filter Success',
  SET_DATA_FILTER_FAILURE = '[App] Set Data Filter Failure',

  REMOVE_DATA_FILTER = '[App] Remove Data Filter',
  REMOVE_DATA_FILTER_SUCCESS = '[App] Remove Data Filter Success',
  REMOVE_DATA_FILTER_FAILURE = '[App] Remove Data Filter Failure',
}

export class GetAppData implements Action {
  readonly type = AppActionTypes.GET_APP_DATA;
  constructor(public payload?: TwitterData) {}
}

export class GetAppDataSuccess implements Action {
  readonly type = AppActionTypes.GET_APP_DATA_SUCCESS;
  constructor(public payload?: TwitterData) {}
}

export class GetAppDataFailure implements Action {
  readonly type = AppActionTypes.GET_APP_DATA_FAILURE;
  constructor(public err?: any) {}
}

export class SetDataFilter implements Action {
  readonly type = AppActionTypes.SET_DATA_FILTER;
  constructor(public payload: string) {}
}

export class SetDataFilterSuccess implements Action {
  readonly type = AppActionTypes.SET_DATA_FILTER_SUCCESS;
  constructor(public payload?: string) {}
}

export class SetDataFilterFailure implements Action {
  readonly type = AppActionTypes.SET_DATA_FILTER_FAILURE;
  constructor(public err?: any) {}
}

export class RemoveDataFilter implements Action {
  readonly type = AppActionTypes.REMOVE_DATA_FILTER;
  constructor(public payload: number) {}
}

export class RemoveDataFilterSuccess implements Action {
  readonly type = AppActionTypes.REMOVE_DATA_FILTER_SUCCESS;
  constructor(public payload?: number) {}
}

export class RemoveDataFilterFailure implements Action {
  readonly type = AppActionTypes.REMOVE_DATA_FILTER_FAILURE;
  constructor(public err?: any) {}
}

export type All =
  | GetAppData
  | GetAppDataSuccess
  | GetAppDataFailure
  | SetDataFilter
  | SetDataFilterSuccess
  | SetDataFilterFailure
  | RemoveDataFilter
  | RemoveDataFilterSuccess
  | RemoveDataFilterFailure;
