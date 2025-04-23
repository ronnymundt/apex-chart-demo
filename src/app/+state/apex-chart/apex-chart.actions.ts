import { createActionGroup, props } from '@ngrx/store';
import { IApexCharSerie } from './apex-chart.model';

export const ApexChartActions = createActionGroup({
  source: 'ApexChart',
  events: {
    GetSeries: props<{ length: number }>(),
    SetSeries: props<{ series: IApexCharSerie }>(),
  },
});
