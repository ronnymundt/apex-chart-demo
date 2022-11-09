import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ApexChartEffects } from './apex-chart.effects';

describe('ApexChartEffects', () => {
  let actions$: Observable<any>;
  let effects: ApexChartEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApexChartEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ApexChartEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
