import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApexChartSeriesService {

  constructor() { }

  // PRIVATE METHODES

  private _getRandomBetweenByMinMax(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  // PUBLIC METHODES

  /**
   * 
   * @param length 
   * @returns 
   */
  public getRandomNumbersByLength(length: number): Array<number> {
    return new Array(length).fill(0).map(x => this._getRandomBetweenByMinMax(-100, 100));
  }  
}
