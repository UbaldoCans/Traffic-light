import { Component, OnInit } from '@angular/core';
import { TrafficLight } from '../../interfaces/traffic-light';
import { TrafficLightServiceService } from '../../services/trafficLightService.service';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit {

  trafficLight: TrafficLight;

  constructor( private trafficLightService: TrafficLightServiceService) {
    this.trafficLight = { color: '', onTrafficLight: false}
   }

  ngOnInit(): void {
    this.trafficLightService.getTrafficLight().subscribe( trafficLight => {
      this.trafficLight = trafficLight
    });
  }

}
