import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { ApexChartActions, IApexChartState } from '../../+state/apex-chart';
import { ApexChartComponent } from '../apex-chart/apex-chart.component';

@Component({
  selector: 'bit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ApexChartComponent],
})
export class HomeComponent implements OnInit {
  constructor(
    private store: Store<IApexChartState>,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit() {
    this.dispatchChartSerie();
    this.initSubs();
  }

  private initSubs() {
    interval(7000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.dispatchChartSerie());
  }

  private dispatchChartSerie() {
    this.store.dispatch(ApexChartActions.getSeries({ length: 5 }));
  }
}
