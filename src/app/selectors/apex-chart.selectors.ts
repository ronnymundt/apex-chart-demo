import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IApexChartState } from '../interfaces/apex-chart.interface';
import { apexChartFeatureKey } from '../reducers/apex-chart.reducer';

export const selectApexChartState = createFeatureSelector<IApexChartState>(apexChartFeatureKey);
export const selectApexChart = createSelector(
    selectApexChartState,
    (state: IApexChartState) => { return state; }
)

