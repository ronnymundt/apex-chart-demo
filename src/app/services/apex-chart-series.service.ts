import {Injectable} from '@angular/core';
import {ApexAxisChartSeries} from 'ng-apexcharts';

@Injectable({
  providedIn: 'root'
})
export class ApexChartSeriesService {
  // PRIVATE METHODES

  /**
   * Methode liefet eine zufällige Zahl innerhalb einer range.
   * @param min
   * @param max
   * @returns
   */
  private _getRandomBetweenByMinMax(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // PUBLIC METHODES

  /**
   * Methode liefert eine zufällig apex chart serie.
   * @param length länge der Serie 1 - n
   * @returns
   */
  getRandomChartSerieByLength(length: number): ApexAxisChartSeries {
    const data = new Array(length).fill(0).map(() => this._getRandomBetweenByMinMax(-100, 100));
    return [{
      data: data,
      name: 'Random Chart'
    }];
  }
}
