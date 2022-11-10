import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { ApexChartActions } from '../actions/apex-chart.actions';
import { ApexChartSeriesService } from '../services/apex-chart-series.service';

@Injectable()
export class ApexChartEffects {
  constructor(
    private _actions$: Actions,
    private _acsService: ApexChartSeriesService
  ) {}

  public getApexSeries$: Observable<Action> = createEffect(() => {
    return this._actions$.pipe(
      ofType(ApexChartActions.getSeries),
      map((action) => {
        const series = this._acsService.getRandomChartSerieByLength(action.length);
        return ApexChartActions.loadSeries({ series: series });
      })
    )
  }); 
}
