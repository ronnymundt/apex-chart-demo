import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApexChartEffects } from '../effects/apex-chart.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot([ApexChartEffects])
  ]
})
export class StoreEffectsModule { }
