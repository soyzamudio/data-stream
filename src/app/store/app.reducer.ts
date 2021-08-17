import { createFeatureSelector } from '@ngrx/store';
import { TwitterData } from './../shared/services/pubnub.service';
import { AppActionTypes } from './app.actions';

export interface AppState {
  loading: boolean;
  loaded: boolean;
  data: TwitterData[];
  hashtags: string[];
  error: string | null;
}

const INITIAL_STATE: AppState = {
  loading: false,
  loaded: false,
  data: [],
  hashtags: [],
  error: null,
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
        data: [
          action.payload,
          ...state.data,
        ],
      };
    }
    case AppActionTypes.GET_APP_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
      };
    }
    case AppActionTypes.SET_DATA_FILTER: {
      return {
        ...state,
        loading: true,
        loaded: false,
      }
    }
    case AppActionTypes.SET_DATA_FILTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        hashtags: [...state.hashtags, action.payload],
      }
    }
    case AppActionTypes.SET_DATA_FILTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
      }
    }
    case AppActionTypes.REMOVE_DATA_FILTER: {
      return {
        ...state,
        loading: true,
        loaded: false,
      }
    }
    case AppActionTypes.REMOVE_DATA_FILTER_SUCCESS: {
      const newList = [...state.hashtags];
      newList.splice(action.payload, 1);
      return {
        ...state,
        loading: false,
        loaded: true,
        hashtags: newList
      }
    }
    case AppActionTypes.REMOVE_DATA_FILTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}

export const getAppState = createFeatureSelector<AppState>('app');
