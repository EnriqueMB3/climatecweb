import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherFormComponent } from './components/weather-form/weather-form.component';

import { FormsModule }   from '@angular/forms';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
