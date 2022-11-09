import { Injectable } from '@angular/core';
import { ApexAxisChartSeries } from 'ng-apexcharts';

@Injectable({
  providedIn: 'root'
})
export class ApexChartSeriesService {

  constructor() { }

  // PRIVATE METHODES

  private _getRandomBetweenByMinMax(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // PUBLIC METHODES

  /**
   * 
   * @param length 
   * @returns 
   */
  public getRandomChartSerieByLength(length: number): ApexAxisChartSeries {
    const data = new Array(length).fill(0).map(x => this._getRandomBetweenByMinMax(-100, 100));
    const series: ApexAxisChartSeries = [{
      data: data,
      name: ''
    }]; 
    return series;
  }  
}
