import {Component} from '@angular/core';
import {MenuService} from "../../service/menu.service";

@Component({
  selector: 'spa-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public menuService: MenuService) { }
}
