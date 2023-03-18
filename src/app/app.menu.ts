import { MenuItem } from "src/spa/service/menu.service";

export const AppMenuItems: Array<MenuItem> = [
  {
    text: 'Cars',
    icon: '../../assets/img/car.png',
    route: '/cars',
    submenu: null
  },
  {
    text: 'Maintenance',
    icon: '../../assets/img/settings.png',
    route: '/settings',
    submenu: null
  },
  {
    text: 'Home',
    icon: '../../assets/img/home.png',
    route: '/home',
    submenu: null
  }]



