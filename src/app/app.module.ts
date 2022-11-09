import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreReducersModule } from './modules/store-reducers.module';
import { StoreEffectsModule } from './modules/store-effects.module';
import { ApexChartComponent } from './components/apex-chart/apex-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApexChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreReducersModule,
    StoreEffectsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
