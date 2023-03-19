import {Component, Input} from '@angular/core';
import {Car} from "../../services/car.interface";
import {visibility} from "../../../spa/service/animations";

@Component({
  selector: 'app-car-panel',
  templateUrl: './car-panel.component.html',
  styleUrls: ['./car-panel.component.css'],
  animations: [visibility]
})
export class CarPanelComponent {
  @Input() car: Car;
  @Input() index = 1;
}
