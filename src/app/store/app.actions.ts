import { Action } from "@ngrx/store";

export enum AppActionTypes {
  GET_APP_DATA = '[App] Get App Data',
  GET_APP_DATA_SUCCESS = '[App] Get App Data Success',
  GET_APP_DATA_FAILURE = '[App] Get App Data Failure',
}

export class GetAppData implements Action {
  readonly type = AppActionTypes.GET_APP_DATA;
}

export class GetAppDataSuccess implements Action {
  readonly type = AppActionTypes.GET_APP_DATA_SUCCESS;
}

export class GetAppDataFailure implements Action {
  readonly type = AppActionTypes.GET_APP_DATA_FAILURE;
  constructor(public err?: any) {}
}

export type All =
  | GetAppData
  | GetAppDataSuccess
  | GetAppDataFailure;
