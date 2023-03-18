import {Component} from '@angular/core';
import {ScreenService} from "../service/screen.service";
import {MenuService} from "../service/menu.service";

@Component({
  selector: 'spa-content',
  templateUrl: './spa-content.component.html',
  styleUrls: ['./spa-content.component.css']
})
export class SpaContentComponent {
  constructor(public screenService: ScreenService, public menuService: MenuService) { }
}
