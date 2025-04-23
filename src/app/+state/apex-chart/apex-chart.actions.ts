import { createActionGroup, props } from '@ngrx/store';
import { ApexAxisChartSeries } from 'ng-apexcharts';

export const ApexChartActions = createActionGroup({
  source: 'ApexChart',
  events: {
    GetSeries: props<{ length: number }>(),
    SetSeries: props<{ series: ApexAxisChartSeries }>(),
  },
});
