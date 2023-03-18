import { Component } from '@angular/core';
import { SpaConfigService, SpaConfigSettings, Icons } from '../spa/service/spa-config.service';
import {MenuService} from "../spa/service/menu.service";
import {AppMenuItems} from "./app.menu";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private spaConfigService: SpaConfigService, private menuService: MenuService) {
    const config: SpaConfigSettings = {
      socialIcons: [
        {imageFile: '../../assets/img/facebook.png', alt: 'Facebook', url: 'http://facebook.com'},
        {imageFile: '../../assets/img/instagram.png', alt: 'Instagram', url: 'http://www.instagram.com'},
        {imageFile: '../../assets/img/twitter.png', alt: 'Twitter', url: 'http://twitter.com'},
        {imageFile: '../../assets/img/whatsapp.png', alt: 'WhatsApp', url: 'http://www.whatsapp.com'},
      ],
      showUserControls: true
    };
    spaConfigService.configure(config);
    menuService.items = AppMenuItems;
  }

}
