import { Injectable } from '@angular/core';
import { IApexCharSerie } from '../+state/apex-chart';

@Injectable({
  providedIn: 'root',
})
export class ApexChartSeriesService {
  /**
   * Methode liefet eine zufällige Zahl innerhalb einer range.
   * @param min
   * @param max
   * @returns
   */
  private getRandomBetweenByMinMax(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**
   * Methode liefert eine zufällig apex chart serie.
   * @param length länge der Serie 1 - n
   * @returns
   */
  getRandomChartSerieByLength(length: number): IApexCharSerie {
    const data = new Array(length)
      .fill(0)
      .map(() => this.getRandomBetweenByMinMax(-100, 100));
    return {
        data,
        name: 'Random Chart',
      };
  }
}
