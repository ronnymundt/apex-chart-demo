import { Component, DestroyRef, Input, OnInit, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import {
  ApexAxisChartSeries,
  ApexOptions,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { map } from 'rxjs';
import { IApexChartState, selectApexChart } from '../../+state/apex-chart';
import { TChartTypes } from '../../types/apex-chart.types';

@Component({
  selector: 'bit-apex-chart',
  templateUrl: './apex-chart.component.html',
  styleUrls: ['./apex-chart.component.scss'],
  standalone: true,
  imports: [NgApexchartsModule],
})
export class ApexChartComponent implements OnInit {
  @Input() chartType: TChartTypes = 'bar';
  @ViewChild('chart') chart: ChartComponent = <ChartComponent>{};
  chartOptions: ApexOptions = <ApexOptions>{};

  private apexState$ = this.store.select(selectApexChart);
  private chartLabels: Array<string> = [
    'DEV 1',
    'DEV 2',
    'DEV 3',
    'DEV 4',
    'DEV 5',
  ];

  constructor(
    private store: Store<IApexChartState>,
    private destroyRef: DestroyRef,
  ) { }

  ngOnInit() {
    this.initChartOptions();
    this.initSubs()
  }

  private initSubs() {
    this.apexState$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map(({ series }) =>
          this.chartType === 'donut' || this.chartType === 'radialBar'
            ? series[0].data
            : series,
        ),
      )
      .subscribe((x) => this.updateChartSeries(x));
  }

  private initChartOptions() {
    this.chartOptions = {
      series: [],
      chart: {
        type: this.chartType,
        toolbar: { show: false },
        foreColor: '#ffffff6b',
        zoom: { enabled: false },
      },
      xaxis: { categories: this.chartLabels },
      yaxis: {
        min: -100,
        max: 100,
        opposite: true,
      },
      plotOptions: {
        radialBar: {
          track: { show: false },
          startAngle: -180,
          endAngle: 180,
        },
      },
      labels: this.chartLabels,
      dataLabels: { enabled: false },
      tooltip: { theme: 'dark' },
      theme: { mode: 'dark' },
      legend: { show: true },
      stroke: { show: false },
    };
  }

  private updateChartSeries(series: ApexAxisChartSeries | any) {
    if (!this.chart.hasOwnProperty('chart')) {
      return;
    }
    this.chart.updateSeries(series).then();
  }
}
