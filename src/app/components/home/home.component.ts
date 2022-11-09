import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval, map } from 'rxjs';
import { ApexChartActions } from '../../actions/apex-chart.actions';
import { IApexChartState } from '../../interfaces/apex-chart.interface';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _store: Store<IApexChartState>
  ) { } 

  ngOnInit(): void {
    this._initDispatcher();
    setInterval(() => this._initDispatcher(), 2000);   
  }

  private _initDispatcher(): void { 
      this._store.dispatch(ApexChartActions.getSeries({ length: 12 }));    
  }
}
