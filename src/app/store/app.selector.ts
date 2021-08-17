import { createSelector } from '@ngrx/store';
import { getAppState } from './app.reducer';

export const getData = createSelector(getAppState, (state) => state.data);
export const getHashtags = createSelector(getAppState, (state) => state.hashtags);
