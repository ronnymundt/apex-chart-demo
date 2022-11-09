import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartComponent, ApexAxisChartSeries } from 'ng-apexcharts';
import { ApexChartActions } from '../../actions/apex-chart.actions';
import { IChartOptions, IApexChartState } from '../../interfaces/apex-chart.interface';
import { selectApexChart } from '../../selectors/apex-chart.selectors';
import { ApexChartSeriesService } from '../../services/apex-chart-series.service';

@Component({
  selector: 'apex-chart',
  templateUrl: './apex-chart.component.html',
  styleUrls: ['./apex-chart.component.scss']
})
export class ApexChartComponent implements OnInit {

  // VIEWCHILDS
  @ViewChild('chart') chart: ChartComponent = <ChartComponent>{} ;

  // PUBLICS
  public chartOptions: Partial<IChartOptions> | any;

  constructor(
    private _store: Store<IApexChartState>,
    private _demoser: ApexChartSeriesService
  ) { }

  ngOnInit(): void {
    this._initChart();

    //
    setInterval(() => this._updateData(), 2000); 
    
    //
    this._store.select(selectApexChart).subscribe((x: IApexChartState) => {
      if(!this.chart.hasOwnProperty('chart')) { return ; }      

      this.chart.updateSeries(x.series);
    });    
  }

  /**
   * 
   */
  private _initChart(): void {
    this.chartOptions = {
      series: [
        {
          name: 'My-series',
          data: [null, null, null, null, null, null, null, null, null, null, null, null]
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
      tooltip: { theme: 'dark' },
      legend: { show: false }
    };
  }
  
  /**
   * 
   */
  private _updateData(): void {
    const data = this._demoser.getRandomNumbersByLength(12);
    let series: ApexAxisChartSeries = [{
      data: data,
      name: 'My-series'
    }];     
    
    this._store.dispatch(ApexChartActions.getSeries({ series: series }));
  }

}
