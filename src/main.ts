import {isDevMode} from "@angular/core";
import {provideEffects} from "@ngrx/effects";
import {provideStore} from "@ngrx/store";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {ApexChartEffects, apexChartReducer} from "./app/+state/apex-chart";
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideStore({
      apexChartState: apexChartReducer
    }),
    provideEffects([
      ApexChartEffects
    ]),
    isDevMode() ? provideStoreDevtools({
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }) : [],
  ],
}).catch(err => console.error(err));
