import { MenuItem } from "src/spa/service/menu.service";

export const AppMenuItems: Array<MenuItem> = [
  {
    text: 'Cars',
    icon: '../../assets/img/car.png',
    route: null,
    submenu: [
      {
        text: 'Price top',
        icon: '../../assets/img/car.png',
        route: '/authenticated/car-list/1',
        submenu: null
      },
      {
        text: 'Top 3',
        icon: '../../assets/img/car.png',
        route: '/authenticated/car-list/3',
        submenu: null
      },
      {
        text: 'Top 5',
        icon: '../../assets/img/car.png',
        route: '/authenticated/car-list/5',
        submenu: null
      }]
  },
  {
    text: 'Car maintenance',
    icon: '../../assets/img/settings.png',
    route: '/authenticated/car-maint',
    submenu: null
  },
  {
    text: 'Home',
    icon: '../../assets/img/home.png',
    route: '/authenticated/home',
    submenu: null
  }]



