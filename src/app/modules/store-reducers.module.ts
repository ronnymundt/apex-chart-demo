import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { apexChartFeatureKey, ApexChartReducer } from '../reducers/apex-chart.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(apexChartFeatureKey, ApexChartReducer)
  ]
})
export class StoreReducersModule { }
