import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ControllerComponent } from './components/controller/controller.component';
import { TrafficLightComponent } from './components/traffic-light/traffic-light.component';

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    TrafficLightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
