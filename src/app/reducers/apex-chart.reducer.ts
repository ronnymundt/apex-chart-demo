import { createReducer, on } from '@ngrx/store';
import { ApexAxisChartSeries } from 'ng-apexcharts';
import { ApexChartActions } from '../actions/apex-chart.actions';
import { IApexChartState } from '../interfaces/apex-chart.interface';


export const apexChartFeatureKey = 'apexChart';

export const initialState: IApexChartState = {
  series: <ApexAxisChartSeries>{}
};

export const ApexChartReducer = createReducer(
  initialState,
  on(
    ApexChartActions.getSeries,
    (state: IApexChartState, { length }) => {
      return {...state }
    }
  ),
  on(
    ApexChartActions.loadSeries,
    (state: IApexChartState, { series }) => { 
      return { ...state, series: series };
    }
  )
);
