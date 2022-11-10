import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApexOptions, ChartComponent } from 'ng-apexcharts';
import { ApexChartActions } from '../../actions/apex-chart.actions';
import { IApexChartState } from '../../interfaces/apex-chart.interface';
import { selectApexChart } from '../../selectors/apex-chart.selectors';

@Component({
  selector: 'apex-chart',
  templateUrl: './apex-chart.component.html',
  styleUrls: ['./apex-chart.component.scss']
})
export class ApexChartComponent implements OnInit {

  // VIEWCHILDS
  @ViewChild('chart') chart: ChartComponent = <ChartComponent>{} ;

  // PUBLICS
  public chartOptions: ApexOptions = <ApexOptions> {};

  constructor(
    private _store: Store<IApexChartState>
  ) { }

  ngOnInit(): void {    
    this._initChartOptions();   
    this._initSubscritions();
    this._store.dispatch(ApexChartActions.getSeries({ length: 12 })); // dispatch init. value serie
  }

  // PRIVATE METHODES

  /**
   * 
   */
  private _initSubscritions(): void {
    this._store.select(selectApexChart).subscribe((x: IApexChartState) => {          
      if(!this.chart.hasOwnProperty('chart')) { return; }
      this.chart.updateSeries(x.series);      
    }); 
  }

  /**
   * Methode init. die apex chart options.
   */
  private _initChartOptions(): void {
    this.chartOptions = {
      series: [
        {
          name: 'My-series',
          data: []
        }
      ],
      chart: {
        //height: 350,
        type: 'bar',
        toolbar: { show: false },                
        foreColor: '#ffffff6b',
        zoom: { enabled: false }
      },
      xaxis: {
        categories: [
          'Jan', 'Feb',  'Mar',  'Apr',  'May',  'Jun',  'Jul',  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
      },
      yaxis: {
        min: -100,
        max: 100
      },
      dataLabels: {
        enabled: false
      },
      tooltip: { theme: 'dark' },      
      theme: { mode: 'dark' },
      legend: { show: false }
    };
  }
}
