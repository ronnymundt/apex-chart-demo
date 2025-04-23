import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IApexChartState } from './apex-chart.model';
import { apexChartFeatureKey } from './apex-chart.reducer';

export const selectApexChartState =
  createFeatureSelector<IApexChartState>(apexChartFeatureKey);
export const selectApexChart = createSelector(
  selectApexChartState,
  (state: IApexChartState) => {
    return state;
  },
);
