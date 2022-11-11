import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApexAxisChartSeries, ApexOptions, ChartComponent } from 'ng-apexcharts';
import { map, Subscription } from 'rxjs';
import { ApexChartActions } from '../../actions/apex-chart.actions';
import { IApexChartState } from '../../interfaces/apex-chart.interface';
import { selectApexChart } from '../../selectors/apex-chart.selectors';
import { TChartTypes } from '../../types/apex-chart.types';

@Component({
  selector: 'bit-apex-chart',
  templateUrl: './apex-chart.component.html',
  styleUrls: ['./apex-chart.component.scss']
})
export class ApexChartComponent implements OnInit, OnDestroy {
  // INPUTS
  @Input() chartType: TChartTypes = 'bar';

  // VIEWCHILDS
  @ViewChild('chart') chart: ChartComponent = <ChartComponent>{} ;

  // PUBLICS
  public chartOptions: ApexOptions = <ApexOptions> {};

  // PRIVATES
  private _chartLabels: Array<string> = ['DEV 1', 'DEV 2',  'DEV 3',  'DEV 4',  'DEV 5'];
  private _apexState$ = this._store.select(selectApexChart);
  private _sub: Subscription = Subscription.EMPTY;

  constructor(
    private _store: Store<IApexChartState>
  ) { }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  ngOnInit(): void {    
    this._initChartOptions();   
    this._initSubscritions();
    this._store.dispatch(ApexChartActions.getSeries({ length: 5 })); // dispatch init. value serie
  }

  // PRIVATE METHODES

  /**
   * Methode init. die subscritions.
   */
  private _initSubscritions(): void {
    if(this.chartType === 'donut' || this.chartType === 'radialBar') {
      this._sub = this._apexState$.pipe(map(x => x.series[0].data)).subscribe(x => this._updateChartSeries(x)); 
    } else {
      this._sub = this._apexState$.subscribe(x => this._updateChartSeries(x.series));
    }     
  }  

  /**
   * Methode init. die apex chart options.
   */
  private _initChartOptions(): void { 
    this.chartOptions = {
      series: [],
      chart: {        
        type: this.chartType,
        toolbar: { show: false },                
        foreColor: '#ffffff6b',
        zoom: { enabled: false }
      },      
      xaxis: { categories: this._chartLabels },
      yaxis: {
        min: -100,
        max: 100,
        opposite: true
      },      
      plotOptions: {
        radialBar: {          
          track: { show: false },
          startAngle: -180,
          endAngle: 180    
        },
      },
      labels: this._chartLabels,
      dataLabels: { enabled: false },
      tooltip: { theme: 'dark' },      
      theme: { mode: 'dark' },
      legend: { show: true },
      stroke: { show: false },

    };
  }

  /**
   * Methode führt update auf chart serie aus
   * @param series 
   * @returns 
   */
   private _updateChartSeries(series: ApexAxisChartSeries | any): void {
    if(!this.chart.hasOwnProperty('chart')) { return; } 
    this.chart.updateSeries(series);
  }
}
