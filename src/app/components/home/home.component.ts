import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApexChartActions } from '../../actions/apex-chart.actions';
import { IApexChartState } from '../../interfaces/apex-chart.interface';
import { interval, Subscription, take, timer } from 'rxjs';

@Component({
  selector: 'bit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // PRIVATES
  private _interval = Subscription.EMPTY;

  constructor(
    private _store: Store<IApexChartState>
  ) { } 
 
  ngOnInit(): void {    
    timer(0).pipe(take(1)).subscribe(() => this._initDispatcher()); // init. chart serie
    this._interval = interval(5000).subscribe(() => this._initDispatcher()); // aktualisiert alle n-sekunden die daten im store
  }

  ngOnDestroy(): void {
    this._interval.unsubscribe();
  }

  // PRIVATE METHODES

  /**
   * Methode init. die dispatcher
   */
  private _initDispatcher(): void { 
      this._store.dispatch(ApexChartActions.getSeries({ length: 5 }));
  }
}
