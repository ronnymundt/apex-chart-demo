import { createReducer, on } from '@ngrx/store';
import { ApexAxisChartSeries } from 'ng-apexcharts';
import { ApexChartActions } from './apex-chart.actions';
import { IApexChartState } from './apex-chart.model';

export const apexChartFeatureKey = 'apexChartState';

export const initialState: IApexChartState = {
  series: <ApexAxisChartSeries>{}
};

export const apexChartReducer = createReducer(
  initialState,
  on(
    ApexChartActions.setSeries,
    (state: IApexChartState, { series }) => {
      return { ...state, series };
    }
  )
);
