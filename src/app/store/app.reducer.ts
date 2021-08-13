import { All, AppActionTypes } from './app.actions';
import { createFeatureSelector } from '@ngrx/store';

export interface AppState {
  loading: boolean;
  loaded: boolean;
  data: string;
}

const INITIAL_STATE: AppState = {
  loading: false,
  loaded: false,
  data: 'No data'
};

export function appReducer(state: AppState = INITIAL_STATE, action: any): AppState {
  switch (action.type) {
    case AppActionTypes.GET_APP_DATA: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case AppActionTypes.GET_APP_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        data: 'Data Success',
      };
    }
    case AppActionTypes.GET_APP_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: false,
        data: 'Data Failure',
      };
    }
    default: {
      return state;
    }
  }
}

export const getAppState = createFeatureSelector<AppState>('app');
