import { createFeatureSelector } from '@ngrx/store';
import { RouterReducerState, getRouterSelectors } from '@ngrx/router-store';

export const selectRouter = createFeatureSelector<RouterReducerState>('router');

const { selectRouteParams, selectRouteParam, selectQueryParams, selectUrl } =
  getRouterSelectors(selectRouter);

export { selectRouteParams, selectRouteParam, selectQueryParams, selectUrl };
