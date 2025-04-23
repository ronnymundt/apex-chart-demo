import { createReducer, on } from '@ngrx/store';
import { ApexChartActions } from './apex-chart.actions';
import { IApexChartState } from './apex-chart.model';

export const apexChartFeatureKey = 'apexChartState';

export const initialState: IApexChartState = {
  series: {
    name: 'series',
    data: [],
  },
};

export const apexChartReducer = createReducer(
  initialState,
  on(ApexChartActions.setSeries, (state: IApexChartState, { series }) => ({
    ...state,
    series,
  })),
);
