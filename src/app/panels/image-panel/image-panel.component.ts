import { Component } from '@angular/core';
import {visibility} from "../../../spa/service/animations";

@Component({
  selector: 'app-image-panel',
  templateUrl: './image-panel.component.html',
  styleUrls: ['./image-panel.component.css'],
  animations: [visibility]
})
export class ImagePanelComponent {

}
