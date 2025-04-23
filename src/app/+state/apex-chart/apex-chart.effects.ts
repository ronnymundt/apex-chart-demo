import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { ApexChartActions } from './apex-chart.actions';
import { ApexChartSeriesService } from '../../services/apex-chart-series.service';

@Injectable()
export class ApexChartEffects {
  constructor(
    private actions$: Actions,
    private acsService: ApexChartSeriesService,
  ) {}

  getApexSeries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ApexChartActions.getSeries),
      map((action) => {
        const series = this.acsService.getRandomChartSerieByLength(
          action.length,
        );
        return ApexChartActions.setSeries({ series });
      }),
    );
  });
}
