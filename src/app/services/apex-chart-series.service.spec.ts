import { TestBed } from '@angular/core/testing';

import { ApexChartSeriesService } from './apex-chart-series.service';

describe('ApexChartSeriesService', () => {
  let service: ApexChartSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApexChartSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
