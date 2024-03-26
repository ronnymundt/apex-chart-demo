import { createActionGroup, props } from '@ngrx/store';
import { ApexAxisChartSeries } from 'ng-apexcharts';

export const ApexChartActions = createActionGroup({
  source: 'ApexChart',
  events: {
    'Get Series':  props<{ length: number }>(),
    'Set Series': props<{ series: ApexAxisChartSeries }>()
  }
});
