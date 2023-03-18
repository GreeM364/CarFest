import {Component, OnInit} from '@angular/core';
import {ScreenService} from '../service/screen.service';
import {MenuService} from "../service/menu.service";

@Component({
  selector: 'spa-header',
  templateUrl: './spa-header.component.html',
  styleUrls: ['./spa-header.component.css']
})
export class SpaHeaderComponent implements OnInit {

  constructor(public screenService: ScreenService, public menuService: MenuService) { }

  ngOnInit() {
  }

}
