import { Component, OnInit } from '@angular/core';
import { TrafficLight } from '../../interfaces/traffic-light';
import { TrafficLightServiceService } from '../../services/trafficLightService.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  controllerTrafficLight: TrafficLight;

  constructor( private trafficLightService: TrafficLightServiceService) { 
    this.controllerTrafficLight = {color: 'rojo', onTrafficLight: false }
  }

    ngOnInit(): void {
      this.trafficLightService.getTrafficLight().subscribe(trafficLight => {
        this.controllerTrafficLight = trafficLight;
      });
    }
    onSelect($event: any) {
      this.controllerTrafficLight.color = $event.target.value
    }
  
    checkOnOff() {
      this.controllerTrafficLight.onTrafficLight = !this.controllerTrafficLight.onTrafficLight
      if (this.controllerTrafficLight.onTrafficLight === true) {
        this.addController(this.controllerTrafficLight);
      }
    }
  
    addController(trafficLight: TrafficLight) {
      this.trafficLightService.addTrafficLight(trafficLight);
    }
  
}


 


