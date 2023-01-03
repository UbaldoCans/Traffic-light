import { Injectable } from '@angular/core';
import { TrafficLight } from '../interfaces/traffic-light';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficLightServiceService {

  private trafficLight: TrafficLight | any;
  private trafficLight$: Subject<TrafficLight>;
  constructor() {
    this.trafficLight$ = new Subject();
  }

  addTrafficLight(pTrafficLight: TrafficLight) {
    this.trafficLight = pTrafficLight;
    this.trafficLight$.next(this.trafficLight);
  }

  getTrafficLight(): Observable<TrafficLight> {
    return this.trafficLight$.asObservable();
  }
}
